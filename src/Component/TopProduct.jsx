import React from "react";

const TopProduct = () => {
  return (
    <section className="col-span-4 bg-white p-10 rounded-2xl">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Top Products</span>
        <select>
          <option value="">2000-2023</option>
          <option value="">2000-2023</option>
          <option value="">2000-2023</option>
        </select>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-1 justify-center">
          <svg
            className="w-32"
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <g>
              <g>
                <path
                  fill="#394240"
                  d="M34,31.011h29c0.553,0,1-0.447,1-1c0-16.568-13.432-30-30-30c-0.553,0-1,0.447-1,1v29
			C33,30.563,33.447,31.011,34,31.011z M35,2.036c14.667,0.516,26.459,12.307,26.975,26.975H35V2.036z"
                />
                <path
                  fill="#394240"
                  d="M63,33.011H36c-0.044,0-0.082,0.019-0.125,0.024c-0.084,0.011-0.168,0.019-0.248,0.05
			c-0.078,0.031-0.143,0.084-0.209,0.133c-0.036,0.027-0.079,0.041-0.112,0.072c-0.002,0.002-0.003,0.006-0.005,0.008
			c-0.086,0.084-0.152,0.185-0.203,0.295c-0.004,0.009-0.014,0.016-0.018,0.025c-0.016,0.038-0.015,0.084-0.026,0.125
			c-0.023,0.084-0.051,0.169-0.052,0.256L35,34.011c0,0.053,0.022,0.1,0.031,0.152c0.012,0.074,0.016,0.148,0.044,0.219
			c0.035,0.088,0.092,0.16,0.149,0.233c0.021,0.028,0.031,0.063,0.057,0.089l0.01,0.01c0,0,0.002,0.003,0.004,0.004l19.918,20.506
			C60.643,49.795,64,42.295,64,34.011l0,0C64,33.458,63.553,33.011,63,33.011z M55.126,52.376l-16.77-17.365h23.618
			C61.741,41.647,59.2,47.693,55.126,52.376z"
                />
                <path
                  fill="#394240"
                  d="M31.615,34.302C31.012,33.698,31,32.616,31,32.616V5.011c0-0.553-0.447-1-1-1c-16.568,0-30,13.432-30,30
			s13.432,30,30,30c8.284,0,15.784-3.357,21.213-8.787l-1.335-1.335C49.858,53.862,32.596,35.282,31.615,34.302z M30,62.011
			c-15.464,0-28-12.536-28-28C2,18.882,14,6.563,29,6.036c0,0,0,26.068,0,26.975s0.343,1.81,1.016,2.482
			s18.332,19.658,18.332,19.658C43.434,59.421,37.021,62.011,30,62.011z"
                />
              </g>
              <path
                fill="#45AAB8"
                d="M30,62.011c-15.464,0-28-12.536-28-28C2,18.882,14,6.563,29,6.036c0,0,0,26.068,0,26.975
		s0.343,1.81,1.016,2.482s18.332,19.658,18.332,19.658C43.434,59.421,37.021,62.011,30,62.011z"
              />
              <path
                fill="#F76D57"
                d="M35,2.036c14.667,0.516,26.459,12.307,26.975,26.975H35V2.036z"
              />
              <path
                fill="#F9EBB2"
                d="M55.126,52.376l-16.77-17.365h23.618C61.741,41.647,59.2,47.693,55.126,52.376z"
              />
            </g>
          </svg>
        </div>
        <div className="flex-1 flex flex-col  gap-4">
          <div className=" flex  gap-4">
            <div className="w-4 h-4 flex items-start bg-red-500 rounded-full mt-1"></div>
            <div className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Basics Tees</span>
              <small className="text-left leading-8">50%</small>
            </div>
          </div>
          <div className=" flex  gap-4">
            <div className="w-4 h-4 flex items-start bg-green-500 rounded-full mt-1"></div>
            <div className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Basics Tees</span>
              <small className="text-left leading-8">50%</small>
            </div>
          </div>
          <div className=" flex  gap-4">
            <div className="w-4 h-4 flex items-start bg-yellow-500 rounded-full mt-1"></div>
            <div className="flex flex-col justify-start ">
              <span className="text-sm font-bold">Basics Tees</span>
              <small className="text-left leading-8">50%</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TopProduct };