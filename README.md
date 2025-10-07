# QuickCart

A minimal e-commerce site built with **React.js**, **Redux Toolkit**, **Node.js**, and **Framer Motion**.  
This project allows users to view products, add them to a cart, and perform a simple checkout.

---

## Project Goal

Build a lightweight shopping cart application with a fully functional frontend and backend, without a database.

---

## Core Features

### Backend (Node.js)

- API endpoint to fetch a hardcoded list of products (5–10 items), each with:
  - `id`
  - `name`
  - `price`
  - `imageUrl`
- API endpoint to handle checkout:
  - Accepts a list of product IDs and quantities.
  - Logs the order to the console.
  - Returns a success message.

### Frontend (React.js + Redux Toolkit + Framer Motion)

- Fetch and display products in a responsive grid.
- "Add to Cart" button for each product.
- Client-side cart state management using Redux.
- Cart view (modal or separate page) showing:
  - List of items
  - Quantities
  - Total price
- "Checkout" button to send cart data to the backend.
- Smooth animations using **Framer Motion**.

---

## Technologies Used

- **Frontend:** React.js, Redux Toolkit, Framer Motion, Tailwind CSS, Axios, React Router DOM
- **Backend:** Node.js, Express.js
- **State Management:** Redux Toolkit

---

## Installation & Setup

You can set up and run both backend and frontend using this single command script:

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-root>

# Backend
cd backend
npm install
node server.js &  # run backend in background

# Frontend
cd ../frontend
npm install
npm run dev       # run frontend
