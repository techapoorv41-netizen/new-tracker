function Profile({data}){

return(
<div
   className="bg-gradient-to-r from gray-900 to-gray-800 rounded-2xl rounded-xl shadow p-6 flex gap-4 item-center border border-gray-700">
    <img src={data.avatar_url} alt={data.name} className=" rounded-full w-24 h-24 border-4 border blue-500"
    />
<div>
<h2 className="text-3xl font-bold">{data.name}</h2>
<p className="text-black-500">{data.bio}</p>
<p className="text-gray-500">📍{data.location}</p>
<div className="flex gap-4 mt-2" >
<span className="bg-blue-600 text-white-500 text-xs px-3 py-1 rounded-full" >{data.followers} followers</span>
<span className="bg-purple-600 text-white-500 text-xs px-3 py-1 rounded-full">{data.public_repos} repos</span>
</div>
</div>
</div>

)

}
export default Profile;