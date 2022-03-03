import React from 'react'

function Nft() {
  return (
    <div className="flex justify-between font-mono p-20 w-full h-screen bg-webphoto bg-cover bg-center">
      
      

        {/* Left side */}
        <div className="w-1/2 text-xl text-yellowsun align-center">
           
            <p className='text-l m-4 '>Kapital Alliance DAO is launching a distinct line of NFTs to be called the MIDAS COLLECTION. It will consist of 2,500 beautifully designed art pieces  reflecting our vision. <br/> <br/> Midas was the legendary king of antiquity that turned all he touched to gold. The Midas NFT is the digital gold for our ecosystem that confers ownership and grants rights and priviledges to holders <br/> <br/> Mint is planned for March 15th 1800 GMT. Five hundred NFTs will be reserved for whitelisted entrants. Apply f</p>
            <p className='text-l mt-4 mb-16 mx-4'> Join us as we build the future of global, scalable investment opportunities for everyone. </p>
            {/* <img src="images/icons_btn-whitepaper.png" alt="NFT" className='w-48 m-4 py-4'></img> */}
            <button class="bg-yellowsun hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb-16">Apply to WhiteList</button>

            <div className="text-white">
                <h2>Join Our Community</h2>
            </div>
        </div>

        {/* Right side */}

        <div className=" w-1/2 text-2xl text-white align center ml-48">
            <div className="uppercase mb-4">
                <h2>Next Steps after the MIDAS Token Sale</h2>
            </div>
            <div className="">
                <h2 className='uppercase'>Form a treasury</h2>
                <p className='text-sm mb-8'>Proceeds from the NFT launch will be gathered up in ethereum and used to seed the treasury. Community NFT holders will be 
                    issued KA governance tokens via airdrop.
                </p>
            </div>
            <div className="">
                <h2 className='uppercase'>Deploy funds to purchase assets</h2>
                <p className='text-sm mb-8'>Core investment team or token holders present 
                propsals for investment and vote is taken. Disbursement for purchase is made after voting</p>
            </div>
            <div className="">
                <h2 className='uppercase'>Shape the utility of the project</h2>
                <p className='text-sm mb-12'>Midas token holders are treated as pioneers within the project as their contributions aid in liftoff.<br/>
                 They thus retain certain rights in governance
                     and have special treatment with respect to perks giveaways, whitelists  airdrops etc

                </p>
            </div>
            {/* <div className="">
                Join Us !
            </div> */}
        </div>

        <div className=""></div>



      
    </div>
  )
}

export default Nft