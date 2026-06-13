function Profile({data}){

return(
<div
   className="bg-white rounded-xl shadow p-6 flex gap-4">
    <img src="{data.avatar_url}" className=" rounded-full w-20 h-20"
    />
<div>
<h2 className="text-2xl font-bold">{data.name}</h2>
<p className="text-black-500">{data.bio}</p>
<p className="text-black-500">{data.location}</p>
<div className="flex gap-4 mt-2" >
<span className="text-black-500-sm" >{data.followers} followers</span>
<span className="text-black-sm">{data.public_repos} repos</span>
</div>
</div>
</div>

)

}
export default Profile;