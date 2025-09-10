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

export default function SupplierPage() {
  const navigate = useNavigate(); // ✅ في الأعلى قبل أي useState أو function

  const [suppliers, setSuppliers] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [editingIndex, setEditingIndex] = React.useState(null);

  // إضافة أو تعديل المورد
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupplier = { name, email, phone };

    if (editingIndex !== null) {
      setSuppliers((prev) =>
        prev.map((s, idx) => (idx === editingIndex ? newSupplier : s))
      );
      setEditingIndex(null);
    } else {
      setSuppliers((prev) => [...prev, newSupplier]);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  const handleEdit = (index) => {
    const s = suppliers[index];
    setName(s.name);
    setEmail(s.email);
    setPhone(s.phone);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSuppliers((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <Container
      maxWidth="md"
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
            Supplier Page
          </Typography>

          {/* زر العودة للصفحة الرئيسية Inventory */}
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mb: 2 }}
            type="button"
            onClick={() => navigate("/")}
          >
            Back 
          </Button>

          {/* Form لإضافة/تعديل المورد */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", gap: 2, mb: 3 }}
          >
            <TextField
              label="Supplier Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button variant="contained" type="submit">
              {editingIndex !== null ? "Update" : "Add"}
            </Button>
          </Box>

          {/* جدول الموردين */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.phone}</TableCell>
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
