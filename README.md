🛒 CRUD Blueprint App (Next.js + MongoDB + TailwindCSS)

This project is a CRUD application built with Next.js (Pages Router), MongoDB (Mongoose), and TailwindCSS.
It implements the Blueprint Modular Architecture, where each feature (like products) contains all of its related files — APIs, services, models, pages, and components — inside one self-contained module.

⚙️ How to Run the App

Install dependencies

npm install


Create environment variables
Inside the root folder, create a file named .env.local and add your MongoDB connection string:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/crud-blueprint


⚠️ Replace <username> and <password> with your actual MongoDB Atlas credentials.

Run the development server

npm run dev


Open your browser and go to:

http://localhost:3000


You will see the Products List page. From here you can:

➕ Add a new product

✏️ Edit an existing product

❌ Delete a product

🏗️ Blueprint Modular Architecture

Blueprint modular architecture means each feature has its own folder with everything it needs.
Instead of keeping all APIs, components, and models in one global folder, each module is self-contained.

Why this is useful:

Each module is independent and can be easily maintained.

New developers can quickly understand which files belong to which feature.

The project is scalable — when you add new features (e.g., orders, users), you simply create a new module.

📂 Folder Structure
.
├── modules/                           # Feature-based modules
│   └── products/                      # "Products" module
│       ├── api/                       # Product-specific API routes
│       │   ├── create.ts              # POST - create product
│       │   ├── delete.ts              # DELETE - delete product
│       │   ├── list.ts                # GET - list all products
│       │   ├── update.ts              # PUT - update product
│       │   └── [id].ts                # GET - get single product by ID
│       │
│       ├── components/                # UI components for products
│       │   ├── ProductForm.tsx        # Form used for create/edit
│       │   └── ProductTable.tsx       # Table for listing products
│       │
│       ├── models/                    # Database schema
│       │   └── productModel.ts        # Mongoose schema for Product
│       │
│       ├── pages/                     # Feature-specific pages
│       │   ├── index.tsx              # Product list page
│       │   ├── create.tsx             # Create product page
│       │   └── [id].tsx               # Edit product page
│       │
│       └── services/                  # Business logic (DB operations)
│           └── productService.ts      # CRUD functions (create, read, update, delete)
│
├── shared/                            # Shared code across modules
│   ├── components/
│   │   └── Layout.tsx                 # Common layout (header, footer, nav)
│   │
│   └── lib/
│       ├── db.ts                      # MongoDB connection (cached)
│       └── serialize.ts               # Utility to convert _id → id
│
├── pages/                             # Next.js routing system
│   ├── products/
│   │   ├── index.tsx                  # Re-export list page from module
│   │   ├── create.tsx                 # Re-export create page from module
│   │   └── [id].tsx                   # Re-export edit page from module
│   │
│   └── api/                           # Next.js API route entrypoints
│       └── products/*                 # Connects to module APIs
│
├── .env.local                         # Environment variables (MongoDB URI)
├── package.json
└── README.md

📖 Explanation of Each Folder
/modules/products

This is the Products module. It contains everything related to managing products:

api/ → Backend API routes for CRUD operations.

components/ → UI components used by product pages (form, table).

models/ → The Mongoose schema that defines what a product looks like in the database.

pages/ → Next.js pages for listing, creating, and editing products.

services/ → Database queries and business logic (CRUD functions).

/shared

Contains reusable code used across the whole project:

components/Layout.tsx → A layout wrapper (header, footer, navigation).

lib/db.ts → Database connection logic with caching.

lib/serialize.ts → Helper to convert MongoDB’s _id field into id for cleaner frontend responses.

/pages

Contains bridges that connect the Next.js routing system to the modular code.
For example:

/pages/products/index.tsx just re-exports modules/products/pages/index.tsx.
This keeps your URLs clean (/products) while code stays inside the module.

.env.local

Holds environment variables such as MONGODB_URI.
This keeps sensitive credentials out of the codebase.

✅ Completed Requirements

 Next.js project setup with TailwindCSS

 MongoDB + Mongoose integration

 CRUD APIs (create, read, update, delete)

 Modular architecture (Blueprint) implemented

 Pages with UI for list, create, edit, delete

 Shared layout with header/footer

 API testing done with Thunder Client

 Price displayed in Rupees (₹)