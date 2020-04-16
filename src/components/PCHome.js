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
      <Grid container spacing={3}>
        <Grid item lg={1} />
        <Grid item lg={7}>
          <Container>
            <Form isPC={true} />
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={1} />
        <Grid item lg={7}>
          <Container>
            <AnalysisResultArea />
          </Container>
        </Grid>
        <Grid item lg={3}>
          <RightColumn />
        </Grid>
      </Grid>
    </>
  )
}
