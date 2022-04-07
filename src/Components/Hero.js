import React from 'react'
import { FaCheckSquare } from "react-icons/fa";



function Hero() {
  return (
    <div id="home" className=" w-full h-screen bg-cover bg-center overflow-auto " style={{ backgroundImage: "url(/images/people.jpeg)"}}>
      
      

        {/* Left side */}
        <div className="w-full h-full  text-xl bg-stone-800 opacity-70">
             <h2 className='font-mono font-bold text-lg md:text-6xl text-center mt-18 md:mx-4 text-white rounded-t-lg p-5'>
              Kapital Alliance DAO
            </h2>


            <p className='font-mono text-sm md:text-xl mx-2 md:mx-4 text-white p-8 md:visible'> A decentralized platform for scalable investments facilitated by blockchain technology. <br></br> Members collectively invest in web3 projects and high growth, cash flow positive businesses.<br></br> <br></br> <span className='hidden md:flex'>Features:</span>  </p>

            <div className=" hidden md:flex font-mono mx-4 text-white  pt-2 pb-2 px-8 md:visible">
             <FaCheckSquare />

            <p className='pl-4'> Community ownership</p> 
           
            </div><div className=" hidden md:flex font-mono mx-4 text-white  pt-2 pb-2 px-8 md:visible">
             <FaCheckSquare />

            <p className='pl-4'> Onchain and offchain and Assets</p> 
           
            </div><div className=" hidden md:flex font-mono mx-4 text-white  pt-2 pb-2 px-8 md:visible">
             <FaCheckSquare />

            <p className='pl-4'> NFT's that vest tokens</p> 
             </div><div className=" hidden md:flex font-mono mx-4 text-white  pt-2 pb-6 px-8 md:visible">
             <FaCheckSquare />

            <p className='pl-4'> Backed by research</p> 

            <br></br>
           
            </div>

            <p className='font-mono mx-4 text-white p-8 hidden md:flex'>Join us as we build the future of the internet with globally scalable opportunities.</p>


            <div className="md:flex justify-center">
            <a href="#"><button class="bg-transparent opacity-100 border-2 text-white font-bold hover:scale-110 hover:bg-stone-600 rounded md:mt-8 p-6 md:mr-10 ">Join Our DAO </button></a>
            <a href="#"><button class="bg-transparent opacity-100 border-2 text-white font-bold hover:scale-110 hover:bg-stone-600 rounded mt-8 p-6 ">Connect Wallet </button></a>

            </div> 





            
            
        </div>



        {/* Right side */}

        <div className=" w-1/2 text-xl mt-24 text-white align font-mono center ml-48 font-bold">
{/* 
          <div className="uppercase text-3xl mb-12">
            <h2>Why Join The Kapital Alliance DAO ?</h2>
          </div> */}
            {/* <div className="">
                <h2 className='capitalize'>Access to deals</h2>
                <p className='text-l mb-6 font-bold'>Concentrated capital has access to more and higher quality deal flow than retail investors.
                </p>
            </div>
            <div className="">
                <h2 className='capitalize'>Better terms</h2>
                <p className='text-l mb-4'>Getting in early and making high volume investments usually means obtaining favourable terms on deals</p>
            </div> */}

            
            {/* <div className="">
                <h2 className='capitalize'>Community</h2>
                <p className='text-l mb-4'>Large and diverse community provides social support. Diversity of holders means access to a wider array of high quality ideas which translate to better investments. 

                </p>
            </div> */}

            {/* <div className="">
                <h2 className='capitalize font-bold'>Perks</h2>
                <p className='text-l mb-12'>First dip on deals, whitelisting for projects, discounts on goods and services with partner projects, airdrops if any, news, updates and informational material, NFTs.</p>
            </div> */}
            
        </div>



      
    </div>
  )
}

export default Hero