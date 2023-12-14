import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5">
        <div className=" ">
          <iframe
            className="rounded-xl shadow-lg"
            width="1000"
            height="505"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button className="text-xl rounded-2xl bg-red-600 text-white p-3 m-2 text-center font-semibold shadow-2xl hover:bg-white hover:text-red-600 hover:border hover:border-black ">
            Subscribe
          </button>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="px-14 ">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;
