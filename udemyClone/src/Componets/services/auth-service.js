import axios from 'axios'
import authHeader from './auth-header';
const Signup=async(data)=>{
    try{
        return await axios.post("http://localhost:3004/auth/signup",data).then((res)=>{
            if (res.data.token) {
                localStorage.setItem("users", JSON.stringify(res.data.token));
            }
            return res.data
        }).catch((err)=>{
            console.log("signup",err)
        })
    }
    catch(e){
        console.log(e)
    }
}

const login=async(data)=>{
    try{
        return await axios.post("http://localhost:3004/auth/login",data).then((res)=>{
            console.log(res.data.message,"postlogin")
            if (res.data.message.token && res.data.message.refreshToken) {
                localStorage.setItem("users", JSON.stringify(res.data.message.token));
                localStorage.setItem("refresh", JSON.stringify(res.data.message.refreshToken))

            }
            return res.data;
        }).catch((err)=>{
            console.log("login",err)
            
        })
    }
    catch(e){
        console.log("hailogin",e)
    }
}

const getallTours=async()=>{
    try{
        return await axios.get("http://localhost:3004/auth/gettours",{ headers: authHeader() }).then((res)=>{
            return res.data
        })
        .catch((err)=>{
            console.log("gettour",err)
            return err
        })
    }
    catch(e){
        console.log(e)
    }
}

const auth={
    login,Signup,getallTours
}

export default auth