import type { NextApiRequest, NextApiResponse } from "next";
import { deleteProduct } from "../services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      const { id, _id } = req.body;
      const productId = id || _id; // accept both

      if (!productId) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      const deleted = await deleteProduct(productId);
      if (!deleted) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.status(200).json({ success: true });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
