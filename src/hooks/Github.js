import { useState,useEffect } from "react";
import axios from "axios";
import { use } from "react";

function UseGithub(username){
    const[data,setData] = useState(null)
    const[loading,setLoading] =useState(true)
    const[error,setError]= useState(null)
    const[repos, setRepos] = useState([])

useEffect(() =>{
if(!username) return


setLoading(true);
Promise.all([
axios.get(`https://api.github.com/users/${username}`),
axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)

])
.then(([profileRes,reposRes]) =>{
 setData(profileRes.data)
 console.log(profileRes.data)
 setRepos(reposRes.data)
 setLoading(false)   
})


  

.catch(err =>{
  setError("User not found")
  setLoading(false);

});
},[username]);

return {data,loading,error,repos};
}
export default UseGithub;

