import type { NextPage } from 'next'
import { H1 } from '../components/Typography'

const Home: NextPage = () => {
  return (
    <div className="bg-bg-dark pt-[114px]">
      <div className="container p-4 mx-auto flex justify-between">
        <div className="flex flex-col gap-y-6">
          <span className="leading-text text-text-dark-accent">MODERN STUDIO</span>
          <div className="flex flex-col">
            <H1 className="text-text-light">We’re Help</H1>
            <H1 className="text-text-light">To Build Your</H1>
            <H1 className="text-text-light">Dream Project</H1>
          </div>
          <div>
            <span className="text-text-light-gray leading-8">Agency provides a full service range including technical skills, design, business understanding.</span>
          </div>
        </div>
        <div className="flex-none">
          <img
            className="w-[570px] h-[601px]"
            src="./pic.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
