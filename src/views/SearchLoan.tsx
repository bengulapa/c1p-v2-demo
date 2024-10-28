import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchLoan = () => {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        mx: "auto",
        mt: 5,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Credit Arrangement"
        inputProps={{ "aria-label": "Search Credit Arrangement" }}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => {
          navigate(`/${value}/overview`);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchLoan;
