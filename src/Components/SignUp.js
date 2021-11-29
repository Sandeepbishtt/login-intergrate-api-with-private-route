import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    axios
    .post("https://reqres.in/api/login", { email: email, password: password })
    .then((response) => {
        console.log('ResponseSignup')
        setLoading(false);
        const data = response.data.token;
        localStorage.setItem("token", JSON.stringify(data));
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log('CatchError')
        setLoading(false);
        if (error.response.status === 400) {
          setError(error.response.data.error);
        } else setError("Something went wrong. Please try again later.");
      });
      setEmail("");
      setPassword("");
    };
    
   
    
    useEffect(() => {
      setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  return (
    <>
      <Grid style={{ marginTop: "6rem" }}>
        <form onSubmit={submitHandler}>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "50vh",
              width: 280,
              margin: "20px auto",
            }}
          >
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login</h2>
            </Grid>
            {error && <h4 style={{ color: "red" }}>{error}</h4>}
            {loading && <CircularProgress style={{ marginLeft: "7.7rem" }} />}
            <TextField
              label="Email"
              placeholder="Enter Email"
              type="email"
              fullWidth
              required
              onChange={nameChangeHandler}
              value={email}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={passwordChangeHandler}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: "2rem" }}
              fullWidth
            >
              Login
            </Button>
          </Paper>
        </form>
      </Grid>
    </>
  );
};

export default SignUp;
