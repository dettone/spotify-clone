import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Slidebar } from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Spotify Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
     <main>
       <Slidebar />
     </main>
    </div>
  )
}

export default Home
