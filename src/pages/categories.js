import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";

export default function CategoryPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = React.useState([]);
  const [name, setName] = React.useState("");
  const [editingIndex, setEditingIndex] = React.useState(null);

  // إضافة أو تعديل الفئة
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { name };

    if (editingIndex !== null) {
      setCategories((prev) =>
        prev.map((c, idx) => (idx === editingIndex ? newCategory : c))
      );
      setEditingIndex(null);
    } else {
      setCategories((prev) => [...prev, newCategory]);
    }

    setName("");
  };

  const handleEdit = (index) => {
    const c = categories[index];
    setName(c.name);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setCategories((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ width: "100%", p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Category Page
          </Typography>

          {/* زر العودة للصفحة الرئيسية */}
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mb: 2 }}
            type="button"
            onClick={() => navigate("/")}
          >
            Back
          </Button>

          {/* Form لإضافة/تعديل الفئة */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", gap: 2, mb: 3 }}
          >
            <TextField
              label="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Button variant="contained" type="submit">
              {editingIndex !== null ? "Update" : "Add"}
            </Button>
          </Box>

          {/* جدول الفئات */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((c, index) => (
                <TableRow key={index}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleEdit(index)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}

