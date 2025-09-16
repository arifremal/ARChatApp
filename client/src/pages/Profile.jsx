import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const Profile = () => {
  const [selectedImage, setselectedImage] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("arif");
  const [bio, setBio] = useState("Hi,everyone , I am using AR chat");
  const handleSubmit = async (e)=>{
    e.preventDefault()
    navigate('/')


  }

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between mx-sm:flex-col-reverse rounded-lg">
        <form className="flex flex-col gap-5 p-10 flex-1" action="">
          <h3 className="text-lg ">Profile details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => setselectedImage(e.target.files[0])}
              type="file"
              name=""
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : assets.avatar_icon
              }
              className={`w-12 h-12 ${selectedImage && "rounded-full"}`}
              alt=""
            />
            upload profile image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            placeholder="Your Name"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea   onChange={(e) => setBio(e.target.value)}  value={bio} name="" rows={4} required placeholder="write bio" id="" className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>
        <button onClick={handleSubmit} type="submit" className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer">
        Save
        </button>
        </form>
        <img className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10" src={assets.logo_icon} alt="" />
      </div>
    </div>
  );
};

export default Profile;
