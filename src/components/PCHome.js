import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header } from './Header.js';
import { FormContainer as Form } from './FormContainer.js';
import { AnalysisResultAreaContainer as AnalysisResultArea } from './AnalysisResultAreaContainer'
import { RightColumn } from './RightColumn'

export const PCHome = () => {
  return (
    <>
      <Header />
      <div style={{marginTop:15}}/>
      <Grid container spacing={3}>
        <Grid item lg={2} />
        <Grid item lg={6}>
          <Form isPC={true} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={2} />
        <Grid item lg={6}>
          <AnalysisResultArea />
        </Grid>
        <Grid item lg={3}>
          <RightColumn />
        </Grid>
      </Grid>
    </>
  )
}
