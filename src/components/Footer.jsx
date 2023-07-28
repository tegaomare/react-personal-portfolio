import React from "react";
import img1 from "../assets/angle.jpg"
import img2 from "../assets/cool.png"
export default function Footer() {
    return (
      <footer className="w-100 mt-auto bg-secondary p-4 bg-purple-900">
        <div className="container px-5 py-5 mx-auto text-center">
          <span
            className="emoji"
            role="img"
            aria-label="angle-face"
            aria-hidden="false"
          ></span>
          <img src={img1} alt="Angle Face" />
          <h4 className="pb-2">
            Goodbye{" "}
            <span
              className="emoji"
              role="img"
              aria-label="tongue-face"
              aria-hidden="false"
            ></span>
          </h4>
          <img src={img2} alt="Tongue Face" />
        </div>
      </footer>
    );
  }