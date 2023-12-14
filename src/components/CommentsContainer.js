import React from "react";
import { commentsData } from "../utils/Constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-4 bg-gray-200 p-2 rounded-lg shadow-xl hover:pt-3 ">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&amp;s"
        alt="user"
      />

      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <h1>{text}</h1>
        {/* <h1>{replies}</h1> */}
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-7 border border-l-black ml-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2  ">
      <h1 className="font-bold text-2xl  ">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
