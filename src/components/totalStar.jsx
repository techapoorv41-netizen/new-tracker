import { Star, GitFork } from "lucide-react";

function TotalStars({ repos }) {
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  return (
    <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 mt-4 flex gap-8">
      <div className="flex items-center gap-2">
        <Star size={18} className="text-yellow-400" />
        <span className="text-white font-bold">{totalStars}</span>
        <span className="text-gray-400 text-sm">Total Stars</span>
      </div>
      <div className="flex items-center gap-2">
        <GitFork size={18} className="text-blue-400" />
        <span className="text-white font-bold">{totalForks}</span>
        <span className="text-gray-400 text-sm">Total Forks</span>
      </div>
    </div>
  );
}

export default TotalStars;