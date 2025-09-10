import * as React from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";

export default function AddItemForm({ onAddItem, suppliers = [], categories = [] }) {
  const [itemData, setItemData] = React.useState({
    name: "",
    category: "",
    quantity: "",
    reorderThreshold: "",
    supplier: "",
    lastRestocked: "",
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setItemData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(itemData);
    setItemData({
      name: "",
      category: "",
      quantity: "",
      reorderThreshold: "",
      supplier: "",
      lastRestocked: "",
      productImage: null,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        width: 800,        // نصف الصفحة تقريباً
        mx: "auto",
        mt: 3,
        justifyContent: "space-between",
      }}
    >
      {/* Name */}
      <TextField
        name="name"
        label="Name"
        value={itemData.name}
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 45%" }}
        required
      />

      {/* Category ComboBox */}
      <TextField
        select
        name="category"
        label="Category"
        value={itemData.category}
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 45%" }}
        required
      >
        {categories.map((cat, idx) => (
          <MenuItem key={idx} value={cat}>{cat}</MenuItem>
        ))}
      </TextField>

      {/* Quantity */}
      <TextField
        name="quantity"
        label="Quantity"
        type="number"
        value={itemData.quantity}
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 30%" }}
      />

      {/* Reorder Threshold */}
      <TextField
        name="reorderThreshold"
        label="Reorder Threshold"
        type="number"
        value={itemData.reorderThreshold}
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 30%" }}
      />

      {/* Supplier ComboBox */}
      <TextField
        select
        name="supplier"
        label="Supplier"
        value={itemData.supplier}
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 30%" }}
      >
        {suppliers.map((sup, idx) => (
          <MenuItem key={idx} value={sup}>{sup}</MenuItem>
        ))}
      </TextField>

      {/* Last Restocked */}
      <TextField
        name="lastRestocked"
        label="Last Restocked"
        type="date"
        value={itemData.lastRestocked}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        sx={{ flex: "1 1 45%" }}
      />

      {/* Product Image */}
      <TextField
        name="productImage"
        type="file"
        onChange={handleChange}
        variant="outlined"
        sx={{ flex: "1 1 45%" }}
      />

      {/* Submit Button */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained">Save</Button>
      </Box>
    </Box>
  );
}
