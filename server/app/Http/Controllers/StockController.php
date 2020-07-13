<?php

namespace App\Http\Controllers;

use App\Product;
use App\Stock;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index($product_id)
    {
        $stock = Stock::where('product_id', $product_id)->first();

        if (!$stock) {
            return response()->json([
                'error' => "The product doesn't exist"
            ], 400);
        }

        return response()->json($stock, 200);
    }

    public function update(Request $request, $product_id)
    {
        $validator = Validator::make($request->all(), [
            'AmountP' => 'sometimes|integer',
            'AmountM' => 'sometimes|integer',
            'AmountG' => 'sometimes|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }


        $product = Product::find($product_id);

        if (!$product) {
            return response()->json([
                'error' => "The product doesn't exist"
            ], 400);
        }

        $data = $request->only(['AmountP', 'AmountM', 'AmountG']);
        $stock = $product->stock()->first();

        $stock->AmountP = $data['AmountP'] ?? $stock->AmountP;
        $stock->AmountM = $data['AmountM'] ?? $stock->AmountM;
        $stock->AmountG = $data['AmountG'] ?? $stock->AmountG;

        $stock->save();

        return response()->json($stock, 200);
    }
}
