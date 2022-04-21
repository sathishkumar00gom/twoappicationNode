const users=require("../Data/data")
const JWT = require("jsonwebtoken")
exports.getAllUsers=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            user:users
        }
    })
}
exports.PostNewData=(req,res)=>{
    const {name,password,email}=req.body
    console.log("hai",users)
    let user=users.find((el)=>el.email===email)
    console.log("second",users)
    if(user){
        res.status(400).json({
            status:"failed",
            "errors": [{ msg: "Email Already Exists" }]
        })
    }
    users.push(
        {
            email,
            password
        })
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:2000})
    console.log(token)
    res.status(200).json({
        status:"success",
        data:token
    })
    console.log(users)
}

exports.PostNewLogin=(req,res)=>{
    const {name,email,passsword}=req.body
    const user=users.find((el)=>el.email===email)
    if(!user){
        res.status(401).json({
            status:"failed",
            error:[{msg:"invalid token"}]
        })
    }
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"10m"})
    const refreshToken=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"15m"})
    res.status(200).json({
        status:"success",
        data:{
            token,
            refreshToken
        }
    })
}

exports.refreshTokenHandler=(req,res)=>{
    const {refreshToken}=req.body
    let decode=JWT.decode(refreshToken)
    console.log("haidecode",decode)
    console.log("hai mail",decode.email)
    let email=decode.email
    let currentEmail=users.find((el)=>el.email===email)
    console.log(currentEmail)
    if(currentEmail){
        const token = JWT.sign({ email }, "kjsdksdlkslds12ksjdksd", { expiresIn: "10m" })
        return res.status(200).json({
            status:"success",
            data:{
                token,
                refreshToken
            }
        })
    }
}

