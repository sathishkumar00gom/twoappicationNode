const express=require("express")
const {tours}=require("../Data/data")
const {getAllUsers,PostNewData,PostNewLogin,refreshTokenHandler,getAllTours, checkAuth}=require("../Controllers/jwtController")
const router=express.Router()
router.route("/alluser").get(getAllUsers)
router.route("/signup").post(PostNewData)
router.route("/login").post(PostNewLogin)
router.route("/refresh").post(refreshTokenHandler)
router.get("/gettours",checkAuth,(req, res) => {
    console.log("sample")
    res.status(200).json({
        status:"success",
        data:{
            user:tours
        }
    })
})
module.exports=router