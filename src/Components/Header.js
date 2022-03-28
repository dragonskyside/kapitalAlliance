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
    <div className="md:flex justify-center items-center bg-black font-mono w-full opacity-85 sticky top-0 z-20 py-4">

      <div className=" flex items-center justify-between p-3 text-white md:text-white hover:text-yellowsun mr-10 text-2xl font-bold">
        <Link
          to="home"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
          
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

      <div className= {(showIcon ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-14 flex flex-col md:flex-row text-xl items-center align-middl2 md:bg-transparent bg-gray-600  md:w-auto w-10/12 md:text-white text-white  p-2 transition-left"
        }>

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
          to="about"
          href="#"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1200}
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20"
        >
          About
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

        {/* <Link
          href="#"
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg"
        >
          NFT Whitelist
        </Link> */}

        <Link
          href="#"
          className="inline-block p-3 text-stone hover:text-yellowsun mr-20"
        >
          Whitepaper
        </Link>
      

      {/* ------------------social media icons------------------------- */}

     <div className="mr-5 mt-2  xl p-2 text-white">
     <a href="https://twitter.com/kapitalalliance" >
          <FaTwitter />
        </a>
     </div>

     <div className="mr-5 mt-2 p-2 text-white">
     <a href="#" >
          <FaTelegram />
        </a>
     </div>

     <div className="mr-5 mt-2 p-2 text-white">
     <a href="https://discord.gg/8rmUQYq6" >
          <FaDiscord />
        </a>
     </div>

     </div>
        
       
      
     
    </div>
  );
}

export default Header;
