const authHeader=()=>{
    const user = JSON.parse(localStorage.getItem('users'));
  if (user) {
    return { 'x-access-token': user};
  } else {
    return {};
  }
}
export default authHeader