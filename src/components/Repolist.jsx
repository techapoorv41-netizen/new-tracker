import { useState } from "react";
import {star,Gitfork, Code} from "lucide-react"

function Repolist({ repos }) {
  const [search, newSearch] = useState("");

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div className="p-4">
      <input
        type="text"
        placeholder="Search repos..."
        value={search}
        onChange={(e) => newSearch(e.target.value)}
        className="w-full border p-2 rounded-md mb-4"
      />

      {filteredRepos.map(repo => (
        <div key={repo.id} className="border p-3 rounded-md mb-2">
          <h3>{repo.name}</h3>
          <p>⭐ {repo.stargazers_count}</p>
          <p>🍴 {repo.forks_count}</p>
          <p>💻 {repo.language}</p>
        </div>
      ))}
    </div>
  );
}

export default Repolist;