import Link from "next/link";

interface ProductTableProps {
  products: any[];
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onDelete }: ProductTableProps) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Stock</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={4} className="p-4 text-center">
              No products found
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product._id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">Rs. {product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2 flex gap-2">
                <Link
                  href={`/products/${product._id}`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(product._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
