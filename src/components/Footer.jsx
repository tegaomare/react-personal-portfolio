import React from "react";
import img2 from "../assets/cool.png";

export default function Footer() {
    return (
        <footer className="w-full mt-auto p-4 bg-[#000000]">
            <div className="container px-5 py-5 mx-auto flex flex-col items-center text-center space-y-4">
                <h4 className="text-gray-200 text-xl font-semibold">
                    Thank you!
                    <span
                        className="emoji ml-2"
                        role="img"
                        aria-label="tongue-face"
                        aria-hidden="false"
                    >
                    </span>
                </h4>
                <img
                    src={img2}
                    alt="Tongue Face"
                    className="w-16 h-16 object-cover rounded-full shadow-lg mt-4"
                />
                {/* Copyright */}
                <p className="text-gray-400 text-sm mt-4">
                    &copy; {new Date().getFullYear()} Tega Omarejedje. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
