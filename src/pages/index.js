import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Panels from '@/components/Panels'
import Admin from '@/components/SuperAdmin'
import SuperAdmin from '@/components/SuperAdmin'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>p2p | Developed by P2P Clouds</title>
        <meta name="description" content="Get access to all types of calculators, including religious, financial, and health calculators, with our all-in-one calculator app developed by P2P Clouds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="calculator app, all-in-one calculator, religious calculator, financial calculator, health calculator, P2P Clouds" />
        <meta name='author' content='P2P Clouds'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
      <Navbar />
      <div className="mt-16">
        <Panels />
        
      </div>
<div className="mt-8">
   <SuperAdmin/>
   <Admin/>
   <Footer />
</div>
     
    </div>
    </>
  )
}
