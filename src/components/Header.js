import React from 'react';
import { Grid, AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => (
  <AppBar color="transparent" position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">yukkuri</Typography>
    </Toolbar>
  </AppBar>
)