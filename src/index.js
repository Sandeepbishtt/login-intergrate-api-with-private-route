import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from 'axios'

axios.interceptors.request.use(request => {
  console.log('Request')
  return request
},
error => {
  console.log('RequestError')
  return Promise.reject(error)
}
)
axios.interceptors.response.use(response => {
  console.log("response");
  return response
},
error => {
  console.log('ResponseError')
  return Promise.reject(error)
}
)



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
