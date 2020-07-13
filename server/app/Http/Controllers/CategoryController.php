<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::get();
        $response = [];

        foreach ($categories as $category) {
            $response[] = $category->name;
        }

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $category = Category::where('name', $request->name)->exists();

        if ($category) {
            return response()->json(
                [
                    'error' => 'Category already exists'
                ],
                400
            );
        }

        $category = new Category();

        $category['name'] = $request->name;

        $category->save();

        return response()->json($category, 200);
    }

    public function delete(Request $request)
    {
        $name = $request->query('name');
        $category = Category::where('name', $name)->first();

        if (!$category) {
            return response()->json(
                [
                    'error' => 'Category not found'
                ],
                400
            );
        }

        $category->delete();

        return response()->json([
            'success' => 'Category successfully deleted'
        ], 200);
    }
}
