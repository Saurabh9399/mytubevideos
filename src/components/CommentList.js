const CommentList = ({ comments }) => {
  return (
    <div className="m-5 border-l border-l-red-500 w-[65%]">
      {comments.map((comment) => (
        <div key={comment.name} className="p-2 my-2 mx-2">
          <div className="flex items-center">
            <img
              alt="user"
              className="w-6 mr-2"
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            />
            <h2 className="font-bold">{comment.name}</h2>
          </div>
          <p className="text-gray-500 mx-4 my-2">{comment.text}</p>
          <CommentList comments={comment.replies} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
