import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props {
  netflixOriginals: Movie[]
}

const Home = ({ netflixOriginals }: Props) => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - NotFlix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals}/>
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [ netflixOriginals ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json())
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results
    }
  }
 }