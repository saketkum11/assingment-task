import React from "react";

const UserCredential = () => {
  return (
    <div className=" max-w-sm mx-auto">
      <div className=" flex flex-col justify-center  min-h-screen">
        <h4 className="text-3xl font-bold text-left">Sign In</h4>
        <p className="text-left my-2">Sign in to your account</p>
        <div className="flex justify-between my-2 gap-4">
          <button className="bg-white p-2 rounded-xl flex-1">
            <img src="" alt="" />
            <p className="text-xs text-slate-400">Signin With Google</p>
          </button>
          <button className="bg-white p-2 rounded-xl flex-1 ">
            <img src="" alt="" />
            <p className="text-xs text-slate-400 ">Signin With Apple</p>
          </button>
        </div>
        <div className="">
          <form className="flex flex-col gap-4 bg-white p-7 rounded-xl border-r-2">
            <div className="flex flex-col gap-2">
              <label className="text-left">Email address</label>
              <input
                type="email"
                className="bg-slate-200  py-2 px-4 rounded-xl text-lg"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-left ">Password</label>
              <input
                type="password"
                className="bg-slate-200 text-base py-2 px-4 rounded-xl"
                placeholder=".............."
              />
            </div>
            <span className="text-blue-500 text-left w-full">
              Forgot Password ?
            </span>
            <button className="bg-black text-white w-full p-2 rounded-xl mt-3">
              Sign In
            </button>
          </form>
          <div className="mt-5">
            <span>
              Don't Have Account?
              <strong className="ml-2 text-blue-500">Register Here.</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserCredential };
