import React from "react";
import Search from "../media/icons/search.svg";
import Notification from "../media/icons/bell-regular.svg";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div className="bg-orange_primary mr-4 rounded-full p-2">
            <svg
              className="block h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <h3 className="m-0 font-extrabold text-[18px]">778399285</h3>
        </div>
        <div className="flex justify-between">
          <img style={{ width: "30px" }} src={Search} alt="search icon" />
          <img
            style={{ width: "30px", marginLeft: "1.5rem" }}
            src={Notification}
            alt="notification icon"
          />
        </div>
      </div>
      <h2 className="py-4 font-[700] text-[21px]">Bonjour MOUHAMED</h2>
    </div>
  );
}
