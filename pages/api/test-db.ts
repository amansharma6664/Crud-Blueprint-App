import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/shared/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    res.status(200).json({ message: "✅ Connected to MongoDB!" });
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
