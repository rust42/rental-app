import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/auth";


const NavBar = () => {
    const user =  useSelector(selector => selector.login.user);
    const dispatch = useDispatch();

    const logoutButtonPressed = () => {
        dispatch(logout());
    };

    return (
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h6">KiloHertz</Typography>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
              <>
                  <Button color="inherit" component={Link} to="/">Home</Button>
                  <Button color="inherit" component={Link} to="/vehicles">Reserve</Button>
                  
                {!user && <Button color="inherit" component={Link} to="/registration">Register</Button>}
                {user && <Button color="inherit" onClick={logoutButtonPressed}>Logout</Button>}
                {!user && <Button color="inherit" component={Link} to="/login">Login</Button>}
              </>
          </div>
        </Toolbar>
      </AppBar>
    );
}
export default NavBar;