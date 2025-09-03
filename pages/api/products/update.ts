import type { NextApiRequest, NextApiResponse } from "next";
import { updateProduct } from "../../../modules/products/services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    try {
      const { id, ...data } = req.body;
      const product = await updateProduct(id, data);
      return res.status(200).json(product);
    } catch (err: any) {
      console.error("Error updating product:", err.message);
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
