import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddItem({ onAddItem }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

   
 formJson.productImage = formData.get("productImage");



    onAddItem(formJson); 
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the new inventory item:
          </DialogContentText>
          <form id="add-item-form" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="itemName"
              label="Item Name"
              type="text"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              margin="dense"
              name="category"
              label="Category"
              type="text"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              margin="dense"
              name="quantity"
              label="Quantity"
              type="number"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              margin="dense"
              name="reorderThreshold"
              label="Reorder Threshold"
              type="number"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              margin="dense"
              name="supplier"
              label="Supplier"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="lastRestocked"
              label="Last Restocked Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="standard"
            />
            <TextField
              margin="dense"
              name="productImage"
              type="file"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="add-item-form">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
