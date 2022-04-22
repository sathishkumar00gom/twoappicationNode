const express=require("express")
const {getAllUsers,PostNewData,PostNewLogin,refreshTokenHandler,getAllTours, checkAuth}=require("../Controllers/jwtController")
const router=express.Router()
router.route("/alluser").get(getAllUsers)
router.route("/signup").post(PostNewData)
router.route("/login").post(PostNewLogin)
router.route("/refresh").post(refreshTokenHandler)
router.route("/gettours",checkAuth).get(getAllTours)
module.exports=router