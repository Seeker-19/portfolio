import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface SocialItem {
  icon: JSX.Element;
  path: string;
}

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/Seeker-19" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/anurag-leela-kanswal-347559225/",
  },
  { icon: <FaTwitter />, path: "https://x.com/?lang=en&mx=2" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link className={iconStyles} key={index} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
