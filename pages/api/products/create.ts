import type { NextApiRequest, NextApiResponse } from "next";
import { createProduct } from "../../../modules/products/services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const product = await createProduct(req.body);
      return res.status(201).json(product);
    } catch (err: any) {
      console.error("Error creating product:", err.message);
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
