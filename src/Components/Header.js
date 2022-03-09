import React, { useState } from "react";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";
import { Link } from 'react-scroll';





function Header(props) {

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

 

  return (
   
     <div className= {nav ? 'nav active' : 'nav'}>
       <Link to="home" href="#" activeClass="active" spy={true} smooth={true} duration={1200} className="inline-block p-3 text-stone hover:text-yellowsun mr-10 text-2xl font-bold">Kapital Alliance</Link>
       <Link to="home" href="#" activeClass="active" spy={true} smooth={true} duration={1200} className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Home</Link>

       <Link to="nft" href="#" activeClass="active" spy={true} smooth={true} duration={1200}><img src="images/nft2.jpeg" alt="NFT" className='inline w-20  h-12 mr-20 rounded'></img></Link>
       
       {/* <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-10">Roadmap</a>
       <Link href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Tokenomics</Link> */}
       


       <Link to="faq" href="#" activeClass="active" spy={true} smooth={true} duration={1200} className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Faq</Link>

       


       <Link href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg">NFT Whitelist</Link>
       {/* <Link href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg">Translations</Link> */}
       <Link href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Download <br/>Whitepaper</Link>
       <Link href="#" className="mr-5 mt-5 xl"><FaTwitter/></Link>
       <Link href="#" className="mr-5 mt-5"><FaTelegram /></Link>
       <Link href="#" className="mr-5 mt-5"><FaDiscord/></Link>

      
      
       
      
      
     </div>
 
  )
}

export default Header