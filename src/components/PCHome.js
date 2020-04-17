import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Header } from './Header.js';
import { FormContainer as Form } from './FormContainer.js';
import { AnalysisResultAreaContainer as AnalysisResultArea } from './AnalysisResultAreaContainer'
import { RightColumn } from './RightColumn'

export const PCHome = () => {
  return (
    <>
      <Header />
      <Box mt={4}/>
      <Grid container spacing={3}>
        <Grid item lg={2} />
        <Grid item lg={6}>
          <Form isPC={true} />
          <Box mt={4}/>
          <AnalysisResultArea />
        </Grid>
        <Grid item lg={3}>
          <RightColumn />
        </Grid>
      </Grid>
    </>
  )
}
