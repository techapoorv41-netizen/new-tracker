
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = ["#2c2e30", "#0003a5", "#8a8886", "#331404", "#fa0000"];

function LanguageChart({ repos }) {

  const languageCount = {};
  repos.forEach(repo => {
    if(repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  const Data = Object.keys(languageCount).map(lang => ({
    name: lang,
    value: languageCount[lang]
  }));

  return (
    <div className="p-4 bg-gray-400 rounded-2xl border border-gray-600">
      <h2 className="text-2xl font-bold text-white  mb-4">Languages Used</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={Data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {Data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default LanguageChart;