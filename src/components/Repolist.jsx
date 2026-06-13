import { useState } from "react";
import { Star, GitFork, Code2 } from "lucide-react";

function Repolist({ repos }) {
  const [search, newSearch] = useState("");

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Star size={14} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <GitFork size={14} /> {repo.forks_count}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-600">
              <Code2 size={14} /> {repo.language || "N/A"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repolist;