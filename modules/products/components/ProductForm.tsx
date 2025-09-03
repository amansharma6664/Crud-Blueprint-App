import { useState, useEffect } from "react";

interface ProductFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
}

export default function ProductForm({ initialData, onSubmit }: ProductFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "" as number | string,  
    stock: "" as number | string,  
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price ?? "",
        stock: initialData.stock ?? "",
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...form,
      price: Number(form.price), 
      stock: Number(form.stock),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Product Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-1">Price (Rs.)</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          required
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block text-sm font-medium mb-1">Stock</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {initialData ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
}

