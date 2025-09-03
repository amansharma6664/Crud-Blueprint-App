import type { NextApiRequest, NextApiResponse } from "next";
import { deleteProduct } from "../../../modules/products/services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await deleteProduct(id);
      return res.status(200).json({ success: true });
    } catch (err: any) {
      console.error("Error deleting product:", err.message);
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
