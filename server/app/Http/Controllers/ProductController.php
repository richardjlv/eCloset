<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use App\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $category = Category::where('name', $request->query('category'))
            ->first();

        if (!$category) {
            $products = Product::get();
        } else {
            $products = Product::where('category_id', $category->id)->get();
        }


        if (!$products) {
            return response()->json([
                'error' => "There are no products in this category"
            ], 400);
        }

        foreach ($products as $product) {
            $product->image = [
                'path' => $product->image,
                'url' => url("storage/uploads/products/{$product->image}"),
            ];
            $product->category;
        }

        return response()->json($products, 200);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'error' => "The product doesn't exist",
            ], 400);
        }

        $product->image = [
            'path' => $product->image,
            'url' => url("storage/uploads/products/" . $product->image),
        ];

        $product->category;
        $product->stock;

        return response()->json([
            'id' => $product->id,
            'name' => $product->name,
            'details' => $product->details,
            'price' => $product->price,
            'image' => $product->image,
            'category' => $product->category->name,
            'stock' => [
                "AmountP" => $product->stock->AmountP,
                "AmountM" => $product->stock->AmountM,
                "AmountG" => $product->stock->AmountG,
            ],
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'category' => 'required|string',
            'details' => 'required|json',
            'price' => 'required|regex:/^\d*(\.\d{2})?$/',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'AmountP' => 'required|integer',
            'AmountM' => 'required|integer',
            'AmountG' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $category_id = Category::where('name', $request->category)->first()->id;

        if (!$category_id) {
            return response()->json([
                'error' => "Selected category does not exist"
            ], 400);
        }

        $image = $request->file('image');
        $product = $request->only(['name', 'price']);
        $product['details'] = json_decode($request->details, true);
        $product['image'] = str::random(32) . '.' . $image->getClientOriginalExtension();

        $image->storeAs('public/uploads/products', $product['image']);

        $product = Product::create($product);

        $product->category_id = $category_id;
        $product->save();

        $stock = $request->only(['AmountP', 'AmountM', 'AmountG']);
        $stock['product_id'] = $product->id;

        $stock = Stock::create($stock);

        return response()->json([
            'product' => $product,
            'stock' => [
                'AmountP' => $stock->AmountP,
                'AmountM' => $stock->AmountM,
                'AmountG' => $stock->AmountG,
            ]
        ], 200);
    }

    public function delete($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'error' => 'Product not found'
            ], 400);
        }

        Storage::delete('public/uploads/products/' . $product->image);

        $product->delete();

        return response()->json([
            'success' => 'Category successfully deleted'
        ], 200);
    }
}
