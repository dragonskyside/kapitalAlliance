import React from "react"

function Header(props) {
  return (
   
     <div className="fixed font-mono bg-transparent text-white p-4 flex justify-center border-b-2 border-yellowsun opacity-100 text-l w-full">
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-10 text-2xl">Kapital Alliance</a>
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Home</a>
       <img src="images/nft2.jpeg" alt="NFT" className='inline w-20  h-12 mr-20 rounded'></img>
       {/* <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-10">Roadmap</a>
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Tokenomics</a> */}
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Whitepaper</a> 
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20">Faq</a>
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg">NFT Whitelist</a>
       <a href="#" className="inline-block p-3 text-stone hover:text-yellowsun mr-20 text-lg">Translations</a>
      
     </div>
 
  )
}

export default Header