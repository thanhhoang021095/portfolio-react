import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="bg-slate-800 w-full">
      <div className="pt-16 pb-8 md:px-40 mx-auto text-center text-white">
        <div className="grid lg:grid-cols-12 md:gap-3">
          <div className="text-center lg:text-left lg:col-span-5 md:col-span-12 sm:pt-8">
            <h6 className="font-bold text-2xl">Contact Info</h6>
            <div className="pt-2">
              <p>thanhhoang021095.work@gmail.com</p>
              <p>(+84) 0965 -38 460</p>
              <p>Ho Chi Minh City</p>
            </div>
          </div>
          <div className="text-center lg:text-left lg:col-span-3 md:col-span-12 sm:pt-8">
            <h6 className="font-bold text-2xl">My Hobbies</h6>
            <div className="pt-2">
              <p>Soccer</p>
              <p>Music</p>
              <p>Reading books</p>
              <p>Traveling</p>
            </div>
          </div>
          <div className="text-center lg:text-left lg:col-span-4 md:col-span-12 sm:pt-8">
            <h6 className="font-bold text-2xl">Reference Docs</h6>
            <div className="pt-2">
              <a
                className="block hover:text-cyan-600"
                href="https://amrin.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                Amrin Portfolio
              </a>
              <a
                className="block hover:text-cyan-600"
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
              <a
                className="block hover:text-cyan-600"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
            </div>
          </div>
        </div>
        <hr className="border-1 bg-white my-8 lg:w-1/4 w-2/4 mx-auto"></hr>
        <div>
          All rights reserved by © <strong>Thanh Hoang</strong> 2023
        </div>
      </div>
    </div>
  );
};
