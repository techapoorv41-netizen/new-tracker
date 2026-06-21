function Stats({data}){

    return(
      <div className="bg-gradient-to-r from gray-900 to-gray-800 rounded-2xl rounded-xl shadow p-6 flex gap-4 item-center border border-gray-700">

        <h2 className="text-3xl font-bold">leetcode Stats</h2>
      <p className="text-black-500">{data.username}</p>
     <p className="text-gray-500">{data.solvedProblem}</p>
      </div>

     
    )


    

}
export default Stats;