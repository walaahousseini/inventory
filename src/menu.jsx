import * as React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Menu() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="/supplier">
          <ListItemText primary="Supplier" />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemText primary="Categories" />
        </ListItem>
          <ListItem button component={Link} to="/Dashboards">
          <ListItemText primary="Dashboards" />
        </ListItem>
      </List>
    </Drawer>
  );
}
