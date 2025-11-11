import React from "react";

const Card = (props) => { //we can also declare here hte default values bu replavcing the props to the username and img 
  return (
      <div className="flex  items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={props.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoobsthMQ75ACwRCM02pbYvrZgy0qByx7zzw&s"}
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{props.username || "bheskitang"}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
  );
};

export default Card;

