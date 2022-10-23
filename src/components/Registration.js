import React, { useEffect, useState } from "react";

import {
    Grid,
    TextField,
    Paper,
    Button,
    Backdrop,
    CircularProgress,
    Typography
  } from '@mui/material';
import { signup } from "../services/UserService";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passswordConfirmation, setPasswordConfirmation] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");

    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const registerUser = async () => {
      setLoading(true);
      try {
        await signup({ firstName, lastName, password, email, address1, address2, city, state, zipCode, country });
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
              <TextField label="Address 1" value={address1} onChange={(event) => setAddress1(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Address 2" value={address2} onChange={(event) => setAddress2(event.target.value)} ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="City" value={city} onChange={(event) => setCity(event.target.value)} ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="State" value={state} onChange={(event) => setState(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Zipcode" value={zipCode} onChange={(event) => setZipCode(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Country" value={country} onChange={(event) => setCountry(event.target.value)}></TextField>
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