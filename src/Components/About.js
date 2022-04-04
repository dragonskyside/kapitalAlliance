import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { SiLetsencrypt } from "react-icons/si";
import { FaPeopleArrows } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiPictureInPictureLine } from "react-icons/ri";






function About() {
  return (
    <div className="bg-stone-800 opacity-90 text-white">
    <div id="about" className="container font-mono pt-10 md:pt-36 mx-auto overflow-auto h-auto ">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl mx-auto pt-4">Kapital Alliance</h1>
        <h2 className="px-4 lg:mb-8 text-sm md:text-xl pb-4 mx-auto">
        Is an innovative decentralized investment vehicle defined by innovation and ambition. Kapital Alliance DAO is programmed to not stop until the treasury reaches $100,000,000. It achieves this by investing early and aggressively in promising projects and compounding profits. The data shows that organized capital (VC's) does better than solo investors. If you ever wished you had been early and compounded profits on such projects as Bitcoin, Ethereum, Sol, Avax and others, this is the project for you. These features are present at launch. More are planned for later :
        </h2>
      </div>

      <div className="grid cols-1 md:grid-cols-2 lg:grid-cols-2 gap:4 lg:gap-16 mx-auto mb-10">
        <div className="flex flex-col justify-items-center">
          <AiOutlineBank className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto text-2xl font-bold">Kapital Treasury </h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
           Stores the wealth of the project and is the source of funds for investments, new projects, partnerships  and marketing.
          </p>
        </div>

        <div className="flex flex-col justify-items-center">
          <RiPictureInPictureLine className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto text-2xl font-bold">MIDAS NFT </h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
            Premium NFT's issued to early backers. The MIDAS NFT vests tokens on owners in proportion to the amount purchased. They also unlock rewards and perks for holders. 10,000 will be printed.
          </p>
        </div>

        <div className="flex flex-col justify-items-center">
          <BsCurrencyBitcoin className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto md:text-2xl font-bold md:pb-4">Onchain Assets</h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
            Investments made in other protocols, tokens, NFT's or digital assets. This forms the core of our project. The majority of resources and energy is directed here.
            
          </p>
        </div>

        <div className="flex flex-col justify-items-center">
          <MdOutlineBusinessCenter className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto md:text-2xl font-bold md:pb-4">OffChain assets </h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
            Investments in cashflow producing businesses, stocks, commercial paper etc. These are selected for high yield and will continue generating income even in periods of crypto down cycles.
          </p>
        </div>

        <div className="flex flex-col justify-items-center">
          <FaPeopleArrows className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto md:text-2xl font-bold md:pb-4"> Community </h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
           Join a host of people with similar aspirations. Exchange views and ideas. Keep up with the latest news. Plot economic domination and celebrate wins together.
          </p>
        </div>
       

        <div className="flex flex-col justify-items-center">
          <SiLetsencrypt className="mx-auto lg:w-10 lg:h-10" />
          <h2 className="mx-auto md:text-2xl font-bold md:pb-4">Permissionless Transactions</h2>
          <p className="text-sm md:text-lg  p-4 mx-auto">
          100% secure anonymized investments using ZK-Snarks - because we believe in property rights and data about your investment is solely your business.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
