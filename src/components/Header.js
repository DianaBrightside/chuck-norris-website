import React from "react";
import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Logo from "../images/logo.png";

const useStyles = makeStyles({
  customizeToolbar: {
    minHeight: 59,
  },
  customBox: {
    padding: 0,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Box className={classes.customBox} margin="auto" width={1120}>
        <Toolbar className={classes.customizeToolbar}>
          <img src={Logo} alt="logo" />
          <Typography variant="h6" color="inherit">
            Chuck Norris
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Header;
