import React, { useEffect, useState } from "react";

import {
    Grid,
    TextField,
    Paper,
    Button,
    Backdrop,
    CircularProgress,
    alertClasses,
    Typography
  } from '@mui/material';
import { signup } from "../services/UserService";
import { Box } from "@mui/system";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passswordConfirmation, setPasswordConfirmation] = useState("");
    const [lastName, setLastName] = useState("");

    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const registerUser = async () => {
      setLoading(true);
      try {
        await signup({ firstName, lastName, password, email });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };

  return (
    
      <div style={{ padding: 30 }}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Paper>
          <Typography sx={{ color: 'text.error'}} fontSize="1.5rem">
            {error}
          </Typography>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField label="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)}></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField label="Email" value={email} onChange={(event) => setEmail(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" value={password} onChange={(event) => setPassword(event.target.value)} type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password Confirmation" value={passswordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} type={'password'}></TextField>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth onClick={registerUser}> Register </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };

  export default Registration;