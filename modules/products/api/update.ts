import type { NextApiRequest, NextApiResponse } from "next";
import { updateProduct } from "../services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    try {
      const { id, _id, ...data } = req.body;
      const productId = id || _id; // accept both

      if (!productId) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      const product = await updateProduct(productId, data);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json(product);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
