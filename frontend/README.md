# Lokharido - The New Age Online Shopping Experience 🛍️

![Lokharido Banner](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge) 
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Lokharido** is a high-performance, full-stack e-commerce application architected with **Next.js 15 (App Router)**. Designed to replicate the seamless experience of top-tier platforms like Bewakoof, it features advanced state management, dynamic routing, and a mobile-first responsive design.

🔗 **Live Demo:** [https://lokharido.com](https://lokharido.com)  
📂 **Backend Repo:** [Link to Backend if public]

---

## 🚀 Key Features

### 🛒 Core E-Commerce
- **Global Cart Management:** Built with **Zustand** for persistent state management. Items, quantities, and price calculations (MRP vs Selling Price) are saved to local storage instantly.
- **Dynamic Product Pages:** - **Pan- & -Zoom Gallery:** Interactive image viewer with mouse-hover zoom effects.
  - **Smart SKU Selection:** Size selectors with visual feedback and stock validation.
  - **Delivery Estimator:** Real-time pincode validation mock-up.
- **Review System:** Dedicated reviews page with "Verified Buyer" badges, rating bars, and photo reviews.

### ⚡ Performance & UX
- **Next.js 15 App Router:** Utilizes Server Components for SEO and fast initial load, with Client Components only where interactivity is needed.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop using **Tailwind CSS** grid and flex layouts.
- **SEO Optimized:** Dynamic metadata generation for product pages to ensure high visibility on search engines.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Shadcn/UI |
| **State Management** | Zustand (w/ Persistence Middleware) |
| **Icons** | Lucide React |
| **Deployment** | Vercel / Netlify |

---

## 📸 Screenshots

| **Home Page** | **Shop Category** |
| :---: | :---: |
| ![Home Page](public/readmi/lokharido-home.png) | ![Shop Page](public/readmi/lokharido-shop.png) |

| **Product Details** | **Shopping Cart** |
| :---: | :---: |
| ![Product Page](public/readmi/lokharido-product.png) | ![Cart Page](public/readmi/lokharido-cart.png) |

---

## 🏗️ Architecture & Decisions

### Why Zustand over Redux?
We chose **Zustand** for its lightweight footprint (1kB) and boilerplate-free API. It allows us to manage the `CartStore` globally without wrapping the entire app in complex providers, while the `persist` middleware handles localStorage synchronization automatically.

### Component Structure
The project follows a modular Atomic Design approach:
- `components/shared`: Reusable UI elements (Navbar, Footer, Buttons).
- `components/product`: Specific logic for product displays (Gallery, Info, Reviews).
- `components/cart`: Isolated logic for cart items and bill summary.

---

## ⚡ Getting Started

Clone the project and install dependencies:

```bash
# Clone the repository
git clone [https://github.com/surajbhan93/Lokharido.git](https://github.com/surajbhan93/Lokharido.git)

# Navigate to directory
cd Lokharido

# Install dependencies
npm install

# Start development server
npm run dev

Open http://localhost:3000 with your browser to see the result.

Contributors
[Shubham Verma] - Frontend Architect & UI/UX

[Suraj Bhan] - Backend API & Database

<div align="center"> <sub>Built with ❤️ for the Modern Web. © 2026 Lokharido.</sub> </div>