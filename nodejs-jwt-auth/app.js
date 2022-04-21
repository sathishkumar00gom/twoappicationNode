const express=require("express")
const jwtRouter=require("./routes/jwtRoutes")
const app=express()
app.use(express.json())
app.use("/auth",jwtRouter)
module.exports=app