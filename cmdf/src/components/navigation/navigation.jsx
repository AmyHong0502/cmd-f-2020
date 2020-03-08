import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <nav>
          <Link to="/">
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Link>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
