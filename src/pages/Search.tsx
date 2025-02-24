import SearchIcon from "@mui/icons-material/Search";
import { Alert, Box, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { applications } from "../data/applications";

const Search = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "50%",
        mx: "auto",
      }}
    >
      <Paper
        className="mb-4"
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

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
            const loan = applications.find(
              (a) => a.creditArrangementId === value
            );

            if (!loan) {
              setError(
                "No application found with that ID. Please try another."
              );
            } else {
              navigate(`/${value}/overview`, { state: loan });
            }
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default Search;
