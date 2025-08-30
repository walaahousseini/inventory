import * as React from "react";
import AddItem from "./AddItem.tsx";
import ItemTable from "./ItemTable.jsx";
import SearchBar from "./SearchBar.jsx";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
//import wallpaper from "./wallpaperflare.com_wallpaper.jpg";


export default function App() {
  const [items, setItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, item]);
    setFilteredItems((prev) => [...prev, item]);
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredItems(items);
      return;
    }
    const filtered = items.filter((item) =>
      item.itemName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      backgroundColor: "white", 
      }}
    >
      <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",   
        height: "10%",          
      }}
    >
       < AddItem onAddItem={handleAddItem} />
        </div>

        <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",   
        height: "10%",          
      }}
    >
      <SearchBar onSearch={handleSearch} />
    </div>
  
       
      

      <TableContainer
        component={Paper}
      style={{
    width: 800,          
    maxWidth: "50%",     
    padding: 10,
    margin: "0 auto",    
  }}
      >
      
        <ItemTable items={filteredItems} />
      </TableContainer>
    </div>
  );
}