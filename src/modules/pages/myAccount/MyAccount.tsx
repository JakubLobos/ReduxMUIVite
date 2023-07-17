import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import store, { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { authActions } from "../../../slices/authSlice";

const MyAccount = () => {
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
          Your account details:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Name:"
              secondary={user.name ? user.name : "unknown"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="E-mail:"
              secondary={user.email ? user.email : "unknown"}
            />
          </ListItem>
        </List>
        <Button
          onClick={() => {
            store.dispatch(authActions.logout());
          }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default MyAccount;
