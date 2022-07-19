import Head from 'next/head'
import Image from 'next/image'
import "swiper/css";
import Carosol from '../Components/Header/Carosol';
import style from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Wow Mart - shop and save</title>
      </Head>
      <main className='container mx-auto'>
        <div>
       
         
         <Carosol/>
        
         <div>
          ddg
         </div>
        
         

        </div>
         

      </main>
      
      <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" async></script>
    </div>
  )
}
