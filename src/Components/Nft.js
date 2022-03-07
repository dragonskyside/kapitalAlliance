import React from 'react'

function Nft() {
  return (
    <div className="flex justify-between font-mono p-20 w-full h-screen bg-webphoto bg-cover bold bg-center">
      
       {/* <div className="">
       <img src="images/midas.webp" h-90 w-75 alt="NFT" className='w-48 m-4 py-24'></img></div> */}

        {/* Left side */}
        <div className="w-1/2 text-xl text-yellowsun align-center">

            <h2 className="uppercase text-yellosun text-4xl">NFT MINT </h2>
           
            <p className='text-l mt-4 mb-16'>As a first step towards its goals, the Kapital Alliance DAO is launching a distinct line of NFTs to be called the MIDAS COLLECTION. It will consist of 2,500 beautifully designed art pieces  at a reserve price of 0.5 ETH. Talented artists have been commisioned to produce works of the highest quality. <br/> <br/> Midas was the legendary king of antiquity that turned all he touched to gold. The Midas NFT is digital gold for our ecosystem that confers ownership and grants rights and priviledges to holders <br/> <br/> Mint is planned for March 18th at 1800 GMT. Five hundred NFTs will be reserved for whitelisted entrants. These are community members who apply early. <br/> Proceeds from the launch will be used to seed the treasury.<br/><br/>
             </p>
            {/* <img src="images/icons_btn-whitepaper.png" alt="NFT" className='w-48 m-4 py-4'></img> */}
            <a href="#"><button class="bg-yellowsun hover:bg-white text-black font-bold py-4 px-4 rounded mb-16">Apply to WhiteList</button></a>
            

            
        </div>

        {/* Right side */}

        {/* <div className=" w-1/2 text-2xl text-white align center ml-48">
            <div className="capitalize mb-4">
                <h2>Next Steps after the MIDAS NFT Launch ...</h2>
            </div>
            <div className="">
                <h2 className='capitalize'>Form a treasury</h2>
                <p className='text-l mb-8'>Proceeds from the NFT launch will be gathered up in ethereum and used to seed the treasury. Community NFT holders will be issued KA governance tokens via airdrop.
                </p>
            </div>
            <div className="">
                <h2 className='capitalize'>Deploy funds to purchase assets</h2>
                <p className='text-l mb-8'>Core investment team or token holders present 
                propsals for investment and vote is taken. Disbursement for purchase is made after voting</p>
            </div>
            <div className="">
                <h2 className='capitalize'>Shape the utility of the project</h2>
                <p className='text-l mb-12'>Midas token holders are treated as pioneers within the project as their contributions aid in liftoff.<br/>
                 They thus retain certain rights in governance
                     and have special treatment with respect to perks giveaways, whitelists  airdrops etc

                </p>
            </div>
            {/* <div className="">
                Join Us !
            </div> */}
        {/* </div> */} 

       



      
    </div>
  )
}

export default Nft