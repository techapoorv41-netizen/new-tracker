import Navbar from "./components/Navbar";
import { useState } from "react";
import Profile from "./components/Profile";
import useGithub from "./hooks/Github";
import Repolist from "./components/Repolist";
import LanguageChart from "./components/languageChart";
import TotalStars from "./components/totalStar";
function App() {
  const [username, setUsername] = useState('kunal-kushwaha')
  const { data, loading, error, repos } = useGithub(username)
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);


  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          onKeyDown={(e) => e.key === 'Enter' && setUsername(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 mb-4 outline-none"
        />
        {loading && <p>Loading</p>}
        {error && <p>{erorr}    </p>}
        { data && <Profile data={data}/>}
        {data && <Repolist repos={repos} />}
        {data && <LanguageChart repos={repos} />}
        {data && <TotalStars repos={repos}/>}

      </div>
    </div>

  )

}
export default App;