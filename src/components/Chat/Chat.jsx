

const Chat = () => {
  return (
    <div className="w-full">
      <div className="chat-box relative h-[600px] w-[900px] justify-center bg-red-300 m-6 p-4 shadow-2xl rounded-3xl">
        {/* Chat screen */}
        {/* <div> */}
        {/* <div className="m-5">heading</div> */}

        {/* <div className="chat-header bg-yellow-300 ">chat with user</div> */}
        {/* <div className="chat-body  bg-red-500 p-4 m-3 h-[400px] rounded-lg shadow-lg"> */}

        <div className="absolute bottom-0 w-[850px]">
          {" "}
          <input
            type="text"
            placeholder="start chatting.."
            className="bg-gray-300 m-2 w-[800px] h-9 rounded-lg"
          />
          <button className="bg-green-500 p-2 rounded-lg">
            <i className="fa fa-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
