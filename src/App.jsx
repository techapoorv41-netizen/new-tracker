import Navbar from "./components/Navbar";
import { useState } from "react";
import Profile from "./components/Profile";
import useGithub from "./hooks/Github";
import Repolist from "./components/Repolist";
import LanguageChart from "./components/languageChart";
import TotalStars from "./components/totalStar";
import UseLeetcode from "./hooks/useLeetcode";
import Stats from "./components/Stats";

function App() {
  const [username, setUsername] = useState('')
  const [lcUsername, setLcUsername] = useState('')
  const { data, loading, error, repos } = useGithub(username)
  const {data:lcData,loading :lcLoading , error : lcError  } =UseLeetcode(lcUsername)
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const [theme, setTheme] = useState("dark")

  return (
    <div className={theme === 'dark' ? "bg-[#0a0a0f] min-h-screen" : "bg-gray-100 min-h-screen"}>
      <Navbar theme={theme} setTheme={setTheme} totalStars={totalStars}/>
      <div className="max-w-4xl mx-auto p-6">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          onKeyDown={(e) => e.key === 'Enter' && setUsername(e.target.value)}
          className="w-full bg-[#0a1f0f] border border-[#1e3b2a] rounded-lg px-4 py-2 text-[#e2e8f0] placeholder-[#475569] mb-4 outline-none focus:border-[#22c55e] transition-all"
        />
        <input
  type="text"
  placeholder="Enter LeetCode username..."
  onKeyDown={(e) => e.key === 'Enter' && setLcUsername(e.target.value)}
  className="w-full bg-[#0a1f0f] border border-[#1e3b2a] rounded-lg px-4 py-2 text-[#e2e8f0] placeholder-gray-500 mt-3"
/>
        {loading && <p className="text-[#22c55e] text-center animate-pulse">Loading...</p>}
        {error && <p className="text-red-400 text-center">{error}</p>}
        {data && <Profile data={data} />}
        {data && <Repolist repos={repos} />}
        {data && <LanguageChart repos={repos} />}
        {data && <TotalStars repos={repos} />}
         {lcData && <Stats data ={lcData} />}
      </div>
    </div>
  )
}

export default App;