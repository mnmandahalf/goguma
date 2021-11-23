import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Box, TextField, Typography, Button } from '@material-ui/core';
import { Header } from './Header.js';

export const SignUp = () => {
  return (
    <>
      <Header />
      <Box sx={{mt:4}}/>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={1}/>
        <Grid item lg={4} xs={10}>
          <Typography component="h1" variant="h5">
            新規ユーザー登録
          </Typography>
          <Box component="form" noValidate onSubmit={()=>{}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="ユーザーネーム"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Box sx={{my:4}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                ユーザー登録
              </Button>
            </Box>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/sign_in" variant="body2">
                 ログイン 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={4} xs={1}/>
      </Grid>
    </>
  )
}
