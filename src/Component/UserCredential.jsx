import React from "react";
import { useAuth } from "../Context/AuthProvider";

const UserCredential = () => {
  const { signin } = useAuth();
  return (
    <div className=" sm:max-w-md max-w-xs mx-auto ">
      <div className="mx-5 flex flex-col justify-center  min-h-screen">
        <h4 className="text-4xl font-extrabold text-left">Sign In</h4>
        <p className="text-left my-2">Sign in to your account</p>
        <div className="flex justify-between my-2 gap-4">
          <button
            onClick={() => {
              signin();
            }}
            className="flex gap-2 items-center justify-center flex-1 bg-white  px-2 py-3 rounded-xl "
          >
            <svg
              className="w-4"
              viewBox="-0.5 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-xs text-slate-400">Signin With Google</p>
          </button>
          <button className="flex gap-2 items-center justify-center flex-1 bg-white px-2 py-3 rounded-xl ">
            <svg
              className="w-4"
              viewBox="-1.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>apple [#173]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-102.000000, -7439.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                      id="apple-[#173]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-xs text-slate-400 ">Signin With Apple</p>
          </button>
        </div>
        <div className="">
          <form className="flex flex-col gap-4 bg-white p-7 rounded-xl border-r-2">
            <div className="flex flex-col gap-2">
              <label className="text-left">Email address</label>
              <input
                type="email"
                className="bg-slate-200 sm:py-2   py-1 px-4 rounded-xl text-lg"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-left ">Password</label>
              <input
                type="password"
                className="bg-slate-200 text-base sm:py-2   py-1 px-4 rounded-xl"
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
