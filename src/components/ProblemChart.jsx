
import { BarChart, Bar, Tooltip, XAxis,YAxis,Cell, Legend } from "recharts";

const COLORS = ["#2c2e30", "#0003a5", "#8a8886", "#331404", "#fa0000"];

function ProblemChart({data }) {
 const chartData =[{name :"Easy", value : data.easySolved},
    {name :"Medium", value : data.mediumSolved},
    {name :"Hard", value : data.hardSolved}
 ] 
return(
    <div className="p-4 bg-gray-400 rounded-2xl border border-gray-600">
      <h2 className="text-2xl font-bold text-white  mb-4">Problem-Solved</h2>" 

    <BarChart width={400} height={300} data={chartData}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  
  <Bar dataKey="value">
  <Cell fill="#00722a" />
  <Cell fill="#f0b400" />
  <Cell fill="#240c0c" />
</Bar>
</BarChart>
</div>
)

}
export default ProblemChart;