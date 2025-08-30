import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ItemTable({ items }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: 20  }}>
      <Table sx={{ minWidth: 650 }} aria-label="inventory table">
        
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Reorder Threshold</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell>Last Restocked</TableCell>
            <TableCell>Product Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.itemName}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.reorderThreshold}</TableCell>
              <TableCell>{row.supplier}</TableCell>
              <TableCell>{row.lastRestocked}</TableCell>
              <TableCell>
                {row.productImage && row.productImage.name
                  ? row.productImage.name
                  : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
