import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ValidateFormData } from "../utils";
import { User, authActions } from "../../../slices/authSlice";
import store, { RootState } from "../../../store";
import { useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isSucces, setIsSuccess] = useState<null | boolean>(null);

  const checkAuthStatus = () => {
    switch (isSucces) {
      case null:
        return;
      case false:
        return <Alert severity="error">Error, valid data!</Alert>;
      case true:
        return (
          <Alert severity="success">Success, logged in as {user.name}!</Alert>
        );
      default:
        return;
    }
  };

  const submitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      ValidateFormData(name) &&
      ValidateFormData(email) &&
      ValidateFormData(password)
    ) {
      store.dispatch(
        authActions.login({
          name,
          email,
          password,
        })
      );
      setIsSuccess(true);
      console.log("Data saved");
    } else {
      setIsSuccess(false);
      console.log("ERROR, valid data.");
    }
  };

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em 0em 5em 0em",
        bgcolor: "#395C6B",
        minHeight: "100vh",
      }}
    >
      <Box
        maxWidth={500}
        bgcolor={"#fff"}
        padding={"1em"}
        boxShadow={"0px 3px 5px rgba(0,0,0,0.2)"}
      >
        <Typography padding={".1em"} fontSize={32} align="center" variant="h1">
          Login
        </Typography>
        <form onSubmit={(e) => submitLoginForm(e)}>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
            required
            label="name"
          />
          <TextField
            sx={{ margin: "1em 0 1em 0" }}
            fullWidth
            required
            type="email"
            label="e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth
            type="password"
            required
            label="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button sx={{ margin: "1em 0 0 0" }} type="submit">
            Login
          </Button>
        </form>
        {checkAuthStatus()}
      </Box>
    </Container>
  );
};

export default Login;
