import React from "react";

const Chat = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        <div className="relative bg-white shadow-lg rounded-3xl overflow-hidden">
          <div className="bg-blue-500 text-white p-4 text-lg font-semibold">
            Chat with User
          </div>

          <div className="p-4 h-[400px] overflow-y-scroll bg-gray-50">
            <div className="space-y-2">
              <div className="bg-blue-100 p-3 rounded-lg max-w-xs ml-2">
                <p className="text-gray-800">
                  Hello! How can I help you today?
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-gray-800">
                  I need some information about your services.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="bg-gray-200 flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-4 bg-blue-500 text-white p-2 rounded-lg flex-shrink-0 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i className="fa fa-send"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
