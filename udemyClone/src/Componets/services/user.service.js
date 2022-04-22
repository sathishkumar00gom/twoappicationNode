import axios from 'axios'
import authHeader from './auth-header'
const tours=async(data)=>{
    try{
        return await axios.get("",{ headers: authHeader() }).then((res)=>{
           return res
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(e){
        console.log(e)
    }
}
const auth={
    tours
}
export default auth