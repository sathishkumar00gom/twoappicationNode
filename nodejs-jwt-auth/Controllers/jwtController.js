const {users,tours}=require("../Data/data")
const JWT = require("jsonwebtoken")
exports.getAllUsers=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            user:users
        }
    })
}

exports.getAllTours=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            user:tours
        }
    })
}
exports.PostNewData=(req,res)=>{
    const {password,email}=req.body
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
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"2m"})
    console.log(token)
    res.status(200).json({
        status:"success",
        token:token
    })
    console.log(users)
}

exports.PostNewLogin=(req,res)=>{
    const {email,passsword}=req.body
    const user=users.find((el)=>el.email===email)
    if(!user){
        res.status(401).json({
            status:"failed",
            error:[{msg:"invalid token"}]
        })
    }
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"6m"})
    const refreshToken=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:'1h'})
    res.status(200).json({
        status:"success",
        message:{
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
        const token = JWT.sign({ email }, "kjsdksdlkslds12ksjdksd", { expiresIn: "6m"})
        return res.status(200).json({
            status:"success",
            data:{
                token,
                refreshToken
            }
        })
    }
}




exports.checkAuth=(req,res,next)=>{
    const token= req.headers["x-access-token"];
    console.log("tokens",token)
    if(!token){
        res.status(400).json({
            "errors": [{ msg: "No Token Found" }]
        })
    }
    try{
        const user=JWT.verify(token,"kjsdksdlkslds12ksjdksd")
        conosle.log("token verify",user)
        next()
    }
    catch(e){
        res.status(400).json({
            "errors": [{ msg: "Invalid User" }]
        })
    }
}