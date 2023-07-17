import {
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
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user: User = useSelector((state: RootState) => state.auth.user);

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
        <Link to="/myAccount">
          <BottomNavigationAction
            label="My account"
            value="My account"
            icon={<AccountBoxIcon />}
          />
        </Link>
      );
    } else {
      return (
        <Link to="/Login">
          <BottomNavigationAction label="Login" icon={<LoginIcon />} />
        </Link>
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
          <NavLink to="/">
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </NavLink>
          {getUserAuthStatus()}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Layout;
