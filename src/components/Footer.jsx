import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Sahar Ghoniem</p>
        <p className="hidden sm:block">Front end Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">wordpress Developer</p>
        <p className="hidden sm:block">Social media manager</p>
        <p className="hidden sm:block">Designed by Sahar Ghoniem</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/saharghoniem/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebook}
            alt="https://www.facebook.com/profile.php?id=100082840249597"
          />
        </a>
        <a
          className="ml-4"
          href="https://github.com/Saharghoniem"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="https://www.facebook.com/profile.php?id=100082840249597" />
        </a>
        <a
          className="ml-4"
          href="mailto:saharghoniem@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="https://www.facebook.com/profile.php?id=100082840249597" />
        </a>
        <a
          className="ml-4"
          href="mailto:saharghoniem@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="saharghoniem@icloud.com" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
