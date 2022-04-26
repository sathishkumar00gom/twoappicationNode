import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const instance=axios.create({
//     baseURL: "http://localhost:3004/auth",
//     headers: {
//       "Content-Type": "application/json",
//     },
// })
// axios.interceptors.request.use((request, response) => {
//   console.log(request, 'axios - interceptors - request - request !!!!!')
//   const token = TokenService.getAccessToken()
//   request.headers = { "x-access-token":token,"Content-Type": "application/json" }
//   return request
// })

// axios.interceptors.response.use((response)=>{
//   console.log(response, "RESPONSE 200 ??????");
//   return response
// }, 
// async(error)=>{
//   console.log("error config",error.config)
//   console.log("error",error.response)
// let  originalConfig=error.config;
//   if(error.response.status===401){
//     if(error.response.data.message==="Unauthorized! Access Token was expired!"){
//       console.log("okay",error.response.data.message)
//       let refresh=TokenService.getRefreshToken()
//        console.log("james",refresh)
//       return await instance.post("/refresh",{
//         "x-access-token":refresh, 
//         'content-type':'application/json'
//       }).then((res)=>{
//         console.log("response===>",res?.data?.data?.token)
//         TokenService.UpdateAccessToken(res?.data?.data?.token)
//         instance.defaults.headers.common["x-access-token"] =res?.data?.data?.token;
//         // return instance(originalConfig);
//       })
//       .catch((err)=>{
//         console.log("refresh err=>",err.response)
//       })
//     }
//   }
//   return Promise.reject(error);
// })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
