import React from "react";

// logo image
import logo from "../../assets/logo.png";

// react icons
import { AiFillStar } from "react-icons/ai";

// style file
import "../../Sass/Navbar.module.scss";

// link from react route dom
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <img src={logo} alt="logo/image" onClick={() => navigate("/")} />

        <button>
          <a
            href="https://github.com/Asfak00/resume-builder-app"
            target="_blank">
            give a star <AiFillStar className="starIcon" size={15} />
          </a>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
