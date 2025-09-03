import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import Layout from "@/shared/components/Layout";

export function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/list`) // You might want to create /api/products/[id] in future
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((p: any) => p._id === id);
          setProduct(found);
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  const handleSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/products/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...data }),
      });

      if (res.ok) {
        router.push("/products");
      }
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <Layout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </div>
    </Layout>
  );
}
export { EditProductPage as default } from "@/modules/products/pages/[id]";