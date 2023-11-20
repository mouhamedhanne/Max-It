import React from "react";
import OrangeMoney from "../media/images/orange-money.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function OperationsArea() {
  return (
    <div
      className="grid grid-cols-2 grid-rows-2
      w-full "
    >
      <div className="flex justify-between bg-banniere_principal pt-3 pb-12">
        <div className="ml-3">
          <img
            style={{ width: "30px" }}
            src={OrangeMoney}
            alt="logo orange money"
          />
          <p className="text-white mt-4">Principal</p>
        </div>
        <div className="flex mr-3">
          <FontAwesomeIcon
            icon={faEyeSlash}
            style={{
              color: "#f16e00",
              fontSize: "25px",
              marginRight: "1.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: "#f16e00", fontSize: "25px" }}
          />
        </div>
      </div>

      <div className="flex justify-between pt-3 bg-banniere_principal pb-12">
        <div className="ml-3 text-white">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#fff", fontSize: "25px" }}
          />
          <div className="inline-block ml-2 whitespace-nowrap">
            <p className="mt-4">Crédit recharge</p>
            <h3>0 CFA</h3>
          </div>
        </div>
        <div className="flex mr-3">
          <FontAwesomeIcon
            icon={faEye}
            style={{
              color: "#f16e00",
              fontSize: "25px",
              marginRight: "1.5rem",
            }}
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{ color: "#f16e00", fontSize: "25px" }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center h-16 bg-bg_gray col-span-2">
        <div className="flex ml-3">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ color: "#fff", fontSize: "25px" }}
          />
          <p className="text-white ml-4">Historique transactions</p>
        </div>
        <div className="flex mr-3">
          <h3 className="text-orange_primary mr-2">Accéder</h3>
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{ color: "#f16e00", fontSize: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}
/**
 *  grid-rows-2
 */
