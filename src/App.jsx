import Navbar from "./components/Navbar";
import { useState} from "react";
import Profile from "./components/Profile";
import useGithub from "./hooks/Github";
import Repolist from "./components/Repolist";
function App(){
  const[username, setUsername] = useState('kunal-kushwaha')
  const{data,loading, error,repos} = useGithub(username)

return(
<div className="bg-gray-100 min-h-screen">
<Navbar/ >
  <div className="max-w-4xl mx-auto p-6">
{loading && <p>Loading</p>}
{error && <p>{erorr}    </p>}
{data && <Profile data ={data}/>}
{data && <Repolist repos={repos}/>}

  </div>
</div>

)

}
export default App;