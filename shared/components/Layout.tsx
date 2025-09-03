// import React, { ReactNode, useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

//           <nav className="hidden md:flex space-x-6">
//             <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
//             <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
//             <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
//           </nav>

//           <button
//             className="md:hidden text-gray-700 hover:text-blue-600"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
//           </button>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden bg-white shadow-md">
//             <nav className="flex flex-col space-y-2 px-4 py-3">
//               <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
//               <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
//               <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
//             </nav>
//           </div>
//         )}
//       </header>

//       <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

//       <footer className="bg-white shadow-inner mt-auto">
//         <div className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} MyApp. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;


import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">CRUD Blueprint</Link>
          </h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/products/create" className="hover:underline">
              Add Product
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-6">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} CRUD App — Built with Next.js & MongoDB
        </p>
      </footer>
    </div>
  );
}
