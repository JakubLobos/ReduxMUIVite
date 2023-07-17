import {
  Alert,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline,
  Paper,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useSelector } from "react-redux";
import { User } from "../../../slices/authSlice";
import { RootState } from "../../../store";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);
  const [isSucces, setIsSuccess] = useState<null | boolean>(null);

  const MuiCssBaseline = styled(CssBaseline)`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;

  const getUserAuthStatus = () => {
    if (user.name !== null) {
      return (
        <BottomNavigationAction
          href="/myAccount"
          label="My account"
          icon={<AccountBoxIcon />}
        />
      );
    } else {
      return (
        <BottomNavigationAction
          href="/login"
          label="Login"
          icon={<LoginIcon />}
        />
      );
    }
  };

  return (
    <>
      <MuiCssBaseline />
      {children}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
          {getUserAuthStatus()}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Layout;
