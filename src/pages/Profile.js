import React from "react";

function Profile() {
  return (
    <div className="bg bg-gray-50 flex items-center justify-center">
      <div className="bg-white w-72 my-10 rounded-lg">
        <div className="flex items-center justify-center pt-10 flex-col">
          <img
            src="https://usercontent.one/wp/adtpest.com/wp-content/uploads/2018/08/default-avatar.jpg"
            className="rounded-full w-20"
          />
          <h1 className="text-gray-800 font-semibold text-lg mt-5">
            User Name
          </h1>
          <h1 className="text-gray-800 font-semibold text-lg mt-5">Email</h1>
          <h1 className="text-gray-800 font-semibold text-lg mt-5">Phone</h1>
        </div>
        <div className="flex justify-between p-4">
          <button className="text-xs text-green-500 border-2 py-1 px-2 border-green-300">
            Edit Profile
          </button>
          <div>
            <button className="text-xs text-green-500 border-2 py-1 px-2 border-green-300">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
