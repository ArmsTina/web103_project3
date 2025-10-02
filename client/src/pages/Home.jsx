import React from "react";
import worldMapImage from "../assets/world_map.jpg";

function Home() {
  return (
    <div
      className="h-full bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${worldMapImage})` }}
    ></div>
  );
}

export default Home;
