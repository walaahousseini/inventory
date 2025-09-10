import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./menu";
import Supplier from "./pages/Supplier.js"; 
import Inventory from "./pages/inventory.js"; 
import Categorie from "./pages/categories.js"; 
import Dashboards from "./pages/Dashboards.js";


export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* الصفحة الأساسية رح تكون Inventory */}
        <Route path="/" element={<Inventory />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/categories" element={<Categorie />} />
        <Route path="/Dashboards" element={<Dashboards />} />
      </Routes>
    </BrowserRouter>
  );

}
