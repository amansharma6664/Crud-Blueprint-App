import { useRouter } from "next/router";
import ProductForm from "../components/ProductForm";
import Layout from "@/shared/components/Layout";

export function CreateProductPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/products/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/"); // Go back to product list
      }
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  return (
    <Layout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Create Product</h1>
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ← Back
        </button>
      </div>

      <ProductForm onSubmit={handleSubmit} />
    </div>
    </Layout>
  );
}
export { CreateProductPage as default } from "@/modules/products/pages/create";
