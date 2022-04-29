import axios from "axios";
import TokenService from "./token.service";
const instance=axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/auth`,
    headers: {
      "Content-Type": "application/json",
    },
})
instance.interceptors.request.use((request, _response) => {
  console.log(request, 'axios - interceptors - request - request !!!!!')
  const token = TokenService.getAccessToken()
  request.headers = { "x-access-token":token,"Content-Type": "application/json" }
  return request
})

instance.interceptors.response.use(
  (res) => {
      console.log("hai",res)
    return res;
  },
  async (err) => {
      console.log("error",err)
    const originalConfig = err.config;
    if (err.response.status===401) {
      // Access Token was expired
      if (err.response.data.message==="Unauthorized! Access Token was expired!") {
        try {
            console.log("okay",err.response.data.message)
            let refresh=TokenService.getRefreshToken()
             console.log("james",refresh)
          const res = await instance.post("/refresh", {
            "x-access-token":refresh, 
            'content-type':'application/json'
          });
          console.log("response===>",res?.data?.data?.token)
          TokenService.UpdateAccessToken(res?.data?.data?.token)
          instance.defaults.headers.common["x-access-token"] =res?.data?.data?.token;
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;