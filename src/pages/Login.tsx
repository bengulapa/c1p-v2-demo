import { Alert, Box, Button, InputBase, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../data/api/AuthService";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const authServe = new AuthService();

    if (authServe.login(email)) {
      navigate("/search");
    } else {
      setError("You are not authorized to view this page.");
    }
  };

  return (
    <Box
      sx={{
        width: "30%",
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
          placeholder="Enter your email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
        <Button type="button" sx={{ p: "10px" }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default Login;
