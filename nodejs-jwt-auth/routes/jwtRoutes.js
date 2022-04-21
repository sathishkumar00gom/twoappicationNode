const express=require("express")
const {getAllUsers,PostNewData,PostNewLogin,refreshTokenHandler}=require("../Controllers/jwtController")
const router=express.Router()
router.route("/alluser").get(getAllUsers)
router.route("/signup").post(PostNewData)
router.route("/login").post(PostNewLogin)
router.route("/refresh").post(refreshTokenHandler)
module.exports=router