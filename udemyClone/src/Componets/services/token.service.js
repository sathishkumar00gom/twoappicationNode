const setSignupUser=(user)=>{
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }
const setAccessToken=(user)=>{
  localStorage.setItem("accessToken", JSON.stringify(user));
}
const setRefreshToken=(user)=>{
  localStorage.setItem("RefreshToken", JSON.stringify(user));
}
const getAccessToken=()=>{
  const user=JSON.parse(localStorage.getItem("accessToken"))
  return user
}
const getRefreshToken=()=>{
  const user=JSON.parse(localStorage.getItem("RefreshToken"))
  return user
}
const UpdateAccessToken=(token)=>{
  let user = JSON.parse(localStorage.getItem("accessToken"));
  console.log("older access token",user)
  user=token
  console.log("user new access token",user)
  localStorage.setItem("accessToken", JSON.stringify(user));
}
const TokenService={
    setSignupUser,
    setAccessToken,
    getAccessToken,
    UpdateAccessToken,
    getRefreshToken,
    setRefreshToken,
}
export default TokenService