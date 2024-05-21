import React from "react";

const FooterNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full bg-transparent text-white text-xl py-4 mt-4 " style={{ textShadow: "2px 2px 2px rgba(8, 14, 44, 1)" }}  >
            <div className="container mx-auto flex justify-around mt-4 ">
                <a href="https://www.scenariocustom.com/" target="_blank" rel="noopener noreferrer" className="text-center">
                    <div className="hover:scale-105 transition-all duration-300">Scenario Labs, LLC.</div>
                </a>
                <a href="https://www.matthewspaint.com/home.aspx" target="_blank" rel="noopener noreferrer" className="text-center">
                    <div className="hover:scale-105 transition-all duration-300">Matthews Paint Co.</div>
                </a>
                <a href="https://youtu.be/Putg9QAH6hw?si=_b2dHobN7cZizXrO&t=18" target="_blank" rel="noopener noreferrer" className="text-center">
                    <div className="hover:scale-105 transition-all duration-300">Devilbiss FLG4 Spray Gun Tutorial</div>
                </a>
            </div>
        </div>

    );
};

export default FooterNavbar;