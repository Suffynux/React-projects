import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/suffynux")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  const data = useLoaderData()

  return (
    <>
      <div className="bg-gray-900 w-auto m-2 p-4 text-white text-3xl flex items-center space-x-6 rounded-md ">
        {/* Left side (Image) */}
        <div className="flex-shrink-0">
          <img
            src={data.avatar_url}
            alt="Git Profile image"
            className="w-56 h-32 rounded-full"
          />
        </div>

        {/* Right side (Text Data) */}
        <div className="text-left">
          <h3 className="text-sm">Github Followers: {data.followers}</h3>
          <h3 className="text-sm">Github Repos: {data.public_repos}</h3>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader =async () =>{
  const response = await fetch("https://api.github.com/users/suffynux")
  console.log(response);
  
  return response.json()
}