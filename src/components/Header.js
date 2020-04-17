import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from './Drawer'

export const Header = () => {
  const [status, setStatus] = useState(false)
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setStatus(!status)} >
          <MenuIcon />
        </IconButton>
        <Drawer open={status} onOpen={() => setStatus(true)} onClose={() => setStatus(false)}/>
        <Typography variant="h7">韓国語テキスト解析ツール yukkuri</Typography>
      </Toolbar>
    </AppBar>
  )
}