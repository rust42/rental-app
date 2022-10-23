import React, { useEffect, useState } from "react";

import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    Backdrop,
    CircularProgress,

  } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login =  useSelector(selector => selector.login);

    useEffect(() => {
      if (login.user != null) {
        navigate("/");
      }  
    }, [login]);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    const loginButtonClicked = (event) => {
      dispatch(loginUser({ email, password }));
    };

  return (
      <div style={{ padding: 30 }}>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={login.loading === 'pending'}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Paper>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField value={email} onChange={(event) => setEmail(event.target.value)} label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" value={password} onChange={(event) => setPassword(event.target.value)} type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={'Keep me logged in'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth onClick={loginButtonClicked}> Login </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };

  export default Login;