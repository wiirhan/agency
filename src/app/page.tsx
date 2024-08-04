import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-bg-dark pt-[114px]">
      <div className="container p-4 mx-auto flex justify-between">
        <div className="flex flex-col gap-y-6">
          <span className="leading-text text-text-dark-accent">MODERN STUDIO</span>
          <div className="text-7xl font-extrabold tracking-tighter text-white leading-[80px] max-w-[513px] max-md:text-4xl max-md:leading-[49px]">
            We’re Help <br />
            To Build Your <br />
            Dream Project
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
