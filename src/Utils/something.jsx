import React, { useState } from "react";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

function Header(props) {
  const [showIcon, setshowIcon] = useState(false);

  // const [nav, setnav] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 200) {
  //     setnav(true);
  //   } else {
  //     setnav(false);
  //   }

  // window.addEventListener("scroll", changeBackground);

  // {nav ? 'nav active' : 'nav'}

  return (
    <div className="md:flex justify-between items-center md:bg-black sticky top-0 z-60 py-4">
      <div className="flex items-center justify-between">
        <Link
          to="home"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
          className="inline-block p-3 text-black md:text-white hover:text-yellowsun mr-10 text-2xl font-bold"
        >
          Kapital Alliance
        </Link>

        {showIcon ? (
          <HiOutlineMenuAlt3
            onClick={() => setshowIcon(!showIcon)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer transition-left"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setshowIcon(!showIcon)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer transition-left"
          />
        )}
      </div>

      <div
        // className={
        //   (showIcon ? "left-0" : "-left-full") +
        //   " fixed top-12 bottom-0 bg-gray-500 opacity-60 w-10/12 text-white flex flex-col"
        // }
        className="text-white font-mono"
      >
        <Link
          to="home"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20"
        >
          Home
        </Link>

        <Link
          to="nft"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
        >
          <img
            src="images/nft2.jpeg"
            alt="NFT"
            className="inline w-20 h-12 mr-20 rounded"
          ></img>
        </Link>

        <Link
          to="faq"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20"
        >
          Faq
        </Link>

        <Link
          href="#"
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg"
        >
          NFT Whitelist
        </Link>

        <Link
          href="#"
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20"
        >
          Whitepaper
        </Link>
      </div>

      {/* ------------------social media icons------------------------- */}

      <div className=" flex p-2 text-white">
        <a href="https://twitter.com/kapitalalliance" className="mr-5 mt-5  xl">
          <FaTwitter />
        </a>
        <a href="#" className="mr-5 mt-5">
          <FaTelegram />
        </a>
        <a href="https://discord.gg/8rmUQYq6" className="mr-5 mt-5">
          <FaDiscord />
        </a>
      </div>
      {/* ----------------------end ofsocial media icone------------------------------------- */}
    </div>
  );
}

export default Header;