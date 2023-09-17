import "./App.css";
import { useState } from "react";
function App() {
  
  const[count,setcount]=useState(0);
  function decreHandler(){
   setcount(count-1);
  }
  function increHandler(){
    setcount(count+1);
   }
   function resetHandler(){
    setcount(0);
   }
  return (
   
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
     <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
     <div className="flex  bg-white justify-center gap-12 text-[#344151] py-3 rounded-sm text-[25px]">
      <button onClick={decreHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
      </button>
      <div className="font-bold gap-12 text-5xl">
        {count}
      </div>
      <button onClick={increHandler}  className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" >
        +
      </button>
     
     
      </div>
      <button onClick={resetHandler} className=" bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
