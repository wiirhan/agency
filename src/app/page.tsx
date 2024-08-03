import type { NextPage } from 'next'
import { H1, H2, Text, TextBig } from '../components/Typography'

const Home: NextPage = () => {
  return (
    <div className="p-8">
      <H1 className="text-text-dark">Welcome to our site</H1>
      <H2 className="text-text-dark-accent mt-4">About us</H2>
      <TextBig className="text-text-dark-gray mt-4">We are a company dedicated to creating amazing web experiences.</TextBig>
      <Text className="text-text-dark mt-4">Our team of experts uses cutting-edge technologies to build responsive and user-friendly websites.</Text>
    </div>
  )
}

export default Home
