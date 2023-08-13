import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  const social = [
    {
      name:"Facebook",
      url: "https://www.facebook.com"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com"
    },
    {
      name:"Twitter",
      url: "https://www.twitter.com"
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com"
    }
  ];

  return (
    <footer className="bg-indigo-500 text-white w-full">
      <div className="md:flex md:justify-between md:items-center 8 px-4 py-7">
        <div className="max-md:pb-4">
          <span>© myTinerary Global - Guillermo Alvarez</span>
        </div>
        <div className="flex gap-4 max-md:pb-4">
          <a href="/">Home</a>
          <a href="/cities">Cities</a>
        </div>
        <div className="flex gap-3">
          {social.map((social, index) =>
            <SocialIcon target="blank" key={index} url={social.url} bgColor="white" style={{width:30, height:30}}/>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;