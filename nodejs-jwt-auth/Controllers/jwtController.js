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
    console.log("hai get all tours")
    res.status(200).json({
        status:"success",
        data:{
            user:tours
        }
    })
}
exports.PostNewData=(req,res)=>{
    const {password,email}=req.body
    console.log("signup",users)
    let user=users.find((el)=>el.email===email)
    console.log("database user available",users)
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
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"5m"})
    console.log("signup token",token)
    res.status(200).json({
        status:"success",
        token:token
    })
    console.log(users)
}

exports.PostNewLogin=(req,res)=>{
    const {email,passsword}=req.body
    const user=users.find((el)=>el.email===email)
    console.log("login available user",user)
    if(!user){
        res.status(401).json({
            status:"failed",
            error:{msg:"no user found"}
        })
    }
    const token=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:"6m"})
    const refreshToken=JWT.sign({email},"kjsdksdlkslds12ksjdksd",{expiresIn:'1h'})
    console.log("login token",token)
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
    const { TokenExpiredError } = JWT;
const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.sendStatus(401).send({ message: "Unauthorized!" });
}
    console.log("hai inside")
    const token= req.headers["x-access-token"];
    console.log("tokens",token)
    if(!token){
        res.status(400).json({
            "errors": [{ msg: "No Token Found" }]
        })
    }
    JWT.verify(token, "kjsdksdlkslds12ksjdksd", (err, decoded) => {
        if (err) {
          return catchError(err, res);
        }
        next();
      });
}
