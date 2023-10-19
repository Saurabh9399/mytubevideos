import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Saurabh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Saurabh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Saurabh",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
            },
          ],
        },
        {
          name: "Saurabh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Saurabh",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Saurabh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Saurabh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

  return (
    <div className="">
      <h1 className="font-bold m-4">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
