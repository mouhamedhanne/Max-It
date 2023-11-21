import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function SargalPoint() {
  return (
    <div className="grid grid-cols w-full h-16 ">
      <div className="flex justify-between items-center bg-banniere_principal mx-0">
        <div className="flex ml-4 text-white">
          <FontAwesomeIcon
            icon={faGift}
            style={{ color: "#fff", fontSize: "25px" }}
          />
          <p>Sargal</p>
          <h3>27 pts</h3>
        </div>
        <div className="flex mr-4">
          <FontAwesomeIcon
            icon={faEye}
            style={{ color: "#f16e00", fontSize: "25px" }}
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{ color: "#f16e00", fontSize: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}
