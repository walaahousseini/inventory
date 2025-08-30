import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="small"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outlined" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
