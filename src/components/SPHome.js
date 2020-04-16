import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header } from './Header.js';
import { Form } from './Form.js';
import { AnalysisResultAreaContainer as AnalysisResultArea } from './AnalysisResultAreaContainer'
import { RightColumn } from './RightColumn'

export const SPHome = () => {
  return (
    <>
      <Header />
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
