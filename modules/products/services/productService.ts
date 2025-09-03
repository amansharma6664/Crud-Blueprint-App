import dbConnect from "@/shared/lib/db";
import Product from "../models/productModel";

// Get all products
export async function getProducts() {
  await dbConnect();
  return await Product.find({});
}

// Create a new product
export async function createProduct(data: {
  name: string;
  description?: string;
  price: number;
  stock: number;
}) {
  await dbConnect();
  const product = new Product(data);
  return await product.save();
}

// Update an existing product
export async function updateProduct(id: string, data: any) {
  await dbConnect();
  return await Product.findByIdAndUpdate(id, data, { new: true });
}

// Delete a product
export async function deleteProduct(id: string) {
  await dbConnect();
  return await Product.findByIdAndDelete(id);
}

// Get product by ID (useful for edit page)
export async function getProductById(id: string) {
  await dbConnect();
  return await Product.findById(id);
}
