import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import "swiper/css";
import Ads1 from '../Components/Ads/Ads1';
import FlashDeals from '../Components/Flash Deals/FlashDeals';
import Carosol from '../Components/Header/Carosol';
import NewArrivals from '../Components/New Arrivals/NewArrivals';
import Recommendesion from '../Components/Recommended to you/Recommendesion';


import TreindingNavbar from '../Components/Trending product/TreindingNavbar';



export default function Home({data}) {
const flashDeals= data.slice(0, 5)
const NewArrivels= data.slice(3, 7)
const Bestseller= data.slice(8, 11)
const Recommendation= data.slice(4, 14)
  return (
    <div>
      <Head>
        <title>Wow Mart - shop and save</title>
      </Head>
      <main className='container mx-auto'>
        <Carosol />
        <div className='bg-accent'>
        <TreindingNavbar />
        </div>
        <Ads1></Ads1>
        <FlashDeals flashDeals={flashDeals}/>
        <NewArrivals NewArrivels={NewArrivels} Bestseller={Bestseller}/>
        <Recommendesion Recommendation={Recommendation}/>

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://obscure-stream-41015.herokuapp.com/products`)
  const data = await res.json()
  return {
    props: {data}, 
  }
}
