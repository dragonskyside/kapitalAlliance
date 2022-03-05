import React from 'react'

function Hero() {
  return (
    <div className="flex justify-between p-20 w-full h-screen bg-webphoto bg-cover bg-center opacity-9">
      
      

        {/* Left side */}
        <div className="w-1/2 text-2xl font-bold">
            <h2 className='font-mono text-4xl mt-24 mx-4 text-yellowsun'>Kapital Alliance DAO</h2>
            <p className='font-mono my-12 mx-4 mb text-yellowsun'> A decentralized autonomous organization (DAO) for scalable global investments facilitated by blockchain technology. <br/><br/> Community members  a.k.a 'kapitalists' contribute to collectively make investments in web3 projects and high growth, cash flow positive businesses. <br/><br/> No more going solo, missing out on opportunities or getting dumped on by whales. Invest as part of a community.<br/><br/> Join us as we build the future of the internet with globally scalable opportunities for everyone. </p>
            <img src="images/icons_btn-whitepaper.png" alt="NFT" className='w-48 m-4 py-24'></img>
        </div>



        {/* Right side */}

        <div className=" w-1/2 text-2xl mt-24 text-white align font-mono center ml-48 font-bold">
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