import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData([]);

  //   console.log(data);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sachinjdv7")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/sachinjdv7");
  return data.json();
};
