import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <nav className="d-flex align-items-center">
          <Link to="/">
            <img
              className="logo"
              alt="logo"
              src="https://whitelabelaustralia56731.blob.core.windows.net/los/Angle_Brandmark_Reverse_RGB.png"
            />
          </Link>
          <Typography>CA0000XXXXX - Gula Patisserie</Typography>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
