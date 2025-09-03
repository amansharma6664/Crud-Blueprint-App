import type { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../../modules/products/services/productService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const products = await getProducts();
      return res.status(200).json(products);
    } catch (err: any) {
      console.error("Error fetching products:", err.message);
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
