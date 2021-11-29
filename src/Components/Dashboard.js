import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const history = useHistory();
  const logOutHandler = () =>{
    localStorage.removeItem('token')
    history.push('/')
  }
  return (
    <div style={{position:'relative'}}>
      <h1 style={{ textAlign: "center" }}>Welcome to Dashboard </h1>
      <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ position:'absolute',left:'50%' }}
              onClick={logOutHandler}
            >
              Logout
            </Button>
    </div>
  );
};

export default Dashboard;
