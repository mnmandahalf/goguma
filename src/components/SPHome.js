import React from 'react';
import './App.css';
import { Grid, AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Form } from './Form.js';
import { AnalysisResultAreaContainer as AnalysisResultArea } from './AnalysisResultAreaContainer'
import { RightColumn } from './RightColumn'

export const SPHome = () => {
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
        <Grid item xs={12}>
          <Container>
            <Form isSP={true} />
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container>
            <AnalysisResultArea />
          </Container>
        </Grid>
      </Grid>
      <Grid container alignContent="center">
        <Grid item xs={12}>
          <RightColumn />
        </Grid>
      </Grid>
    </>
  )
}
