import React from 'react'


function Hero() {
  return (
    <div id="home" className="flex justify-between p-20 w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/people.jpeg)"}}>
      
      

        {/* Left side */}
        <div className="w-1/2 text-xl">
            <h2 className='font-mono md:text-6xl text-center mt-24 mx-4 text-white bg-stone-800 opacity-100 hidden'>Kapital Alliance DAO</h2>
            <p className='font-mono mx-4 mb text-white bg-black opacity-80 p-5 hidden'> A decentralized autonomous organization (DAO) for scalable investments facilitated by blockchain technology. <br/><br/> Members collectively invest in Web3 projects and high growth, cash flow positive businesses. No more missing out on opportunities or getting dumped on by whales. You can now invest as part of a community.<br/><br/><br/> Join us as we build the future of the internet with globally scalable opportunities for everyone. </p>
            <a href="#"><button class="bg-white hover:bg-amber-200 text-black font-bold hover:scale-110 py-4 px-4 mx-4  rounded mt-8 hidden">Become a Kapitalist </button></a>
            
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