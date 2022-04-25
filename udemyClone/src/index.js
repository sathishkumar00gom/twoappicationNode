import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios'
import TokenService from '../src/Componets/services/token.service'

// const instance=axios.create({
//     baseURL: "http://localhost:3004/auth",
//     headers: {
//       "Content-Type": "application/json",
//     },
// })
// instance.interceptors.request.use(
//   (config)=>{
//     console.log("request");
//     const token=TokenService.getAccessToken()
//     if(token){
//       config.headers["x-access-token"] = token; 
//     }
//     return config
//   },
//   (error)=>{
//     return Promise.reject(error);
//   }
//   );

// instance.interceptors.response.use(
//   (res)=>{
//     return res
//   },
//   async (err)=>{
//     console.log("interceptoor==>",err)

//   }
// )
const instance=axios.create({
    baseURL: "http://localhost:3004/auth",
    headers: {
      "Content-Type": "application/json",
    },
})
axios.interceptors.request.use((request, response) => {
  console.log(request, 'axios - interceptors - request - request !!!!!')
  const token = TokenService.getAccessToken()
  request.headers = { "x-access-token":token,"Content-Type": "application/json" }
  return request
})

axios.interceptors.response.use((response)=>{
  console.log(response, "RESPONSE 200 ??????");
  if(response.status===401){
    console.log(response)
  }
  return response
}, 
async(error)=>{
  console.log("error",error.response)
  if(error.response.status===401){
    if(error.response.data.message==="Unauthorized! Access Token was expired!"){
      console.log("okay",error.response.data.message)
      let refresh=TokenService.getRefreshToken()
       let data=JSON.stringify(refresh)
       console.log("james",refresh)
      return await instance.post("/refresh",{
        "x-access-token":data, 'content-type':'application/json'
      }).then((res)=>{
        console.log("response===>",res)
      })
      .catch((err)=>{
        console.log("refresh err=>",err)
      })
    }
  }
  return Promise.reject(error);
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
