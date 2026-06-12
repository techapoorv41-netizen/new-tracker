import { useState,useEffect } from "react";
import axios from "axios";

function UseGithub(username){
    const[data,setData] = useState(null)
    const[loading,setLoading] =useState(true)
    const[error,setError]= useState(null)

useEffect(() =>{
if(!username) return


setLoading(true)
axios.get(`https://api.github.com/users/${username}`)
.then(res => {
  setData(res.data)
  setLoading(false)   
})
.catch(err =>{
  setError("User not found")
  setLoading(false)

})
},[username])

return {data,loading,error}
}
export default UseGithub;