import { useEffect, useState } from "react";
import Link from "next/link";
import ProductTable from "../components/ProductTable";
import Layout from "@/shared/components/Layout";

export function ProductListPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products/list");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch("/api/products/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/products/create"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Product
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductTable products={products} onDelete={handleDelete} />
      )}
    </div>
    </Layout>
  );
}
export { ProductListPage as default } from "@/modules/products/pages/index";