import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  Box,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
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
        p: 5,
      }}
    >
      <Typography>Recent Searches</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton color="secondary" component="a" href="/CA01/overview">
            <ListItemText primary="CA01" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/CA02/overview">
            <ListItemText primary="CA02" />
          </ListItemButton>
        </ListItem>
      </List>

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
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
