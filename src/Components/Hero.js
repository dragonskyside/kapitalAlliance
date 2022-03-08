import React from 'react'

function Hero() {
  return (
    <div id="home" className="flex justify-between p-20 w-full h-screen bg-webphoto bg-cover bg-center">
      
      

        {/* Left side */}
        <div className="w-1/2 text-xl">
            <h2 className='font-mono text-6xl text-center mt-24 mx-4 text-yellowsun'>Kapital Alliance DAO</h2>
            <p className='font-mono my-12 mx-4 mb text-yellowsun'> A decentralized autonomous organization (DAO) for scalable investments facilitated by blockchain technology. <br/><br/> Community members  a.k.a 'kapitalists' contribute to collectively make investments in Web3 projects and high growth, cash flow positive businesses. No more going solo, missing out on opportunities due to low funds, or getting dumped on by whales. You can now invest as part of a community.<br/><br/><br/> Join us as we build the future of the internet with globally scalable opportunities for everyone. </p>
            <a href="#"><button class="bg-yellowsun hover:bg-amber-400 text-black font-bold hover:scale-110 py-4 px-4 rounded mb-16">Become a Kapitalist !</button></a>
            
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