import { useState } from "react";
import { Star, GitFork, Code2 } from "lucide-react";

function Repolist({ repos }) {
  const [search, newSearch] = useState("");

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const [sortBy, setSortBy] = useState("stars")
  const sortedRepos = [...filteredRepos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
    if (sortBy === "forks") return b.forks_count - a.forks_count;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="bg-transparent">

      <input
        type="text"
        placeholder="Search repos..."
        outline
        value={search}
        onChange={(e) => newSearch(e.target.value)}
        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 mb-4 outline-none"
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white mt-2"
      >
        <option value="stars">Sort by Stars</option>
        <option value="name">Sort by Name</option>
        <option value="forks">Sort by Forks</option>
      </select>

      {sortedRepos.map(repo => (
        <div key={repo.id} className="border border-gray-600 p-4 rounded-xl mb-3 bg-gray-600 p-4 rounded-xl mb-3 bg-gray-800 hover:border-blue-500 transistion duration-200">
          <a href={repo.html_url} rel="noreferrer" className="text-gray-400 hover:underline">
            <h3 className="font-bold">{repo.name}</h3>
          </a>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Star size={14} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <GitFork size={14} /> {repo.forks_count}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Code2 size={14} /> {repo.language || "N/A"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repolist;