import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Grid, Box, TextField, Typography } from '@material-ui/core';
import { auth } from "../firebase.js";
import { Header } from './Header.js';

export const SignIn = () => {
  const initialState = {
    email: undefined,
    password: undefined
  }
  const [state, setState] = useState(initialState)
  const navigate = useNavigate();
  const handleSubmit = () => {
    auth.signInWithEmailAndPassword(state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  const changeEmail = (event) => setState({
    ...state,
    email: event.target.value
　})
  const changePassword = (event) => setState({
    ...state,
    password: event.target.value
　})
  return (
    <>
      <Header />
      <Box sx={{mt:4}}/>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={1}/>
        <Grid item lg={4} xs={10}>
          <Typography component="h1" variant="h5">
            ログイン 
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={changeEmail}
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
                  value={state.password}
                  onChange={changePassword}
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
              <input
                type="button"
                variant="contained"
                size="large"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                value="ログイン"
                onClick={handleSubmit}
              />
            </Box>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/sign_up" variant="body2">
                 ユーザー登録 
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
