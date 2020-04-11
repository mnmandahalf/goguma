import React from 'react';
import './App.css';
import { Grid, AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Form } from './Form.js';
import { AnalysisResultArea } from './AnalysisResultArea'
import { RightColumn } from './RightColumn'

const App = () => {
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">yukkuri</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item lg={1} />
        <Grid item lg={7}>
          <Container>
            <Form />
          </Container>
          <Container>
            <AnalysisResultArea />
          </Container>
        </Grid>
        <Grid item lg={3}>
          <RightColumn />
        </Grid>
        <Grid item lg={1} />
      </Grid>
    </>
  );
}

export default App;
