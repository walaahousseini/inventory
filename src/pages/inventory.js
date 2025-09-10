import * as React from "react";
import AddItem from "../AddItem.js"; // الفورم اللي عملناه بدون Dialog
import ItemTable from "../ItemTable.jsx";
import SearchBar from "../SearchBar.jsx";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";

export default function Inventory() {
  const [items, setItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);

  const [suppliers] = React.useState(["Supplier A", "Supplier B", "Supplier C"]);
  const [categories] = React.useState(["Category 1", "Category 2", "Category 3"]);

  // إضافة عنصر جديد
  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
    setFilteredItems((prev) => [...prev, item]);
  };

  // البحث
  const handleSearch = (query) => {
    if (!query) {
      setFilteredItems(items);
      return;
    }
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // حذف عنصر
  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setFilteredItems(newItems);
  };

  // تحديث عنصر (مثلاً زيادة الكمية)
  const handleUpdate = (index) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      quantity: parseInt(newItems[index].quantity) + 1,
    };
    setItems(newItems);
    setFilteredItems(newItems);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        paddingTop: 30, // مسافة بسيطة من أعلى الصفحة
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20, // مسافة بين الفورم، البحث، والجدول
      }}
    >
      {/* الفورم */}
      <AddItem
        onAddItem={handleAddItem}
        suppliers={suppliers}
        categories={categories}
      />

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* جدول العناصر */}
      <TableContainer
        component={Paper}
        style={{
          width: "80%",
          padding: 10,
        }}
      >
        <ItemTable
          items={filteredItems}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </TableContainer>
    </div>
  );
}
