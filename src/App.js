import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import { Route, Switch} from "react-router-dom";
import PrivateRoute, { checkToken } from "./Routes/PrivateRoute";
import {useEffect} from 'react';
import { useHistory } from "react-router-dom";
function App() {
  const history = useHistory();
  useEffect(() => {
    const token = checkToken();
    if (!token) {
      return;
    }
    else {
      history.push('/dashboard')
    }
  },[])
  return (
    
      <Switch>
        <Route exact path="/" component={SignUp} />
        <PrivateRoute  path="/dashboard" component={Dashboard} />
      </Switch>
  
  );
}

export default App;
