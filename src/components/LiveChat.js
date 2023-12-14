import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const MessageforChat = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30) + "🦹‍♂️",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="text-center2 rounded-lg shadow-xl bg-slate-100 h-[500px] w-full ml-2 border border-black p-1  overflow-y-scroll flex flex-col-reverse ">
        <h1 className="bg-green-900 text-white p-1 m-2 shadow-xl rounded-lg w-32 text-center font-semibold text-md">
          Live Chat ☝️
        </h1>
        <div>
          {MessageforChat.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
      onSubmit={(e)=>{
        // console.log("submitted")
        e.preventDefault();
        dispatch(addMessage({
            name:"Ayush",
            message:liveMessage,
        }))
        setLiveMessage("")
      }} 
       className="w-full p-2 m-2 border border-black rounded-md" >
        <input 
        value={liveMessage}
        onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}
        className="border border-black p-[2px] w-80 shadow-xl rounded-md"
        type="text"
        />
        <button className="bg-green-900 hover:bg-green-800 p-1  text-white rounded-md shadow-xl m-1">Submit</button>
      </form> 
    </>
  );
};

export default LiveChat;
