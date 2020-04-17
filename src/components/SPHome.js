import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import { Header } from './Header.js';
import { FormContainer as Form } from './FormContainer.js';
import { AnalysisResultAreaContainer as AnalysisResultArea } from './AnalysisResultAreaContainer'
import { RightColumn } from './RightColumn'

export const SPHome = () => {
  return (
    <>
      <Header />
      <Box mt={4}/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container>
            <Form isSP={true} />
          </Container>
        </Grid>
      </Grid>
      <Box mt={2}/>
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
