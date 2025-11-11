// import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
//         <div>
//           <img
//             class="size-48 shadow-xl rounded-md"
//             alt=""
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoobsthMQ75ACwRCM02pbYvrZgy0qByx7zzw&s"
//           />
//         </div>
//         <div class="flex items-center md:items-start">
//           <span class="text-2xl font-medium">Class Warfare</span>
//           <span class="font-medium text-sky-500">The Anti-Patterns</span>
//           <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
//             <span>No. 4</span>
//             <span>·</span>
//             <span>2025</span>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "chaioreact",
    age: 25,
    country: "India",
  } ;

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        {" "}
        tailwind test
      </h1>
      <Card username="BKL" someObj = {myObj}/>
      <Card img="https://pbs.twimg.com/profile_images/1943381910106800128/DyjYlwaf_400x400.jpg" />
    </>
  );
}

export default App;
