import type { NextPage } from 'next'
import About from '../components/home/About'
import Banner from '../components/home/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <About />
    </>
  )
}

export default Home
