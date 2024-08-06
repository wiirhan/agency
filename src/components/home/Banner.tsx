import Button from '../common/Button'

export default function Banner() {
  return (
    <div className="bg-bg-dark pt-[114px]">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-y-6">
          <span className="leading-text text-text-dark-accent">MODERN STUDIO</span>
          <div className="text-7xl font-extrabold tracking-tighter text-white leading-[80px] max-w-[513px] max-md:text-4xl max-md:leading-[49px]">
            We&apos;re Help <br />
            To Build Your <br />
            Dream Project
          </div>
          <div className="w-[470px] text-white/60 font-normal leading-loose">Agency provides a full service range including technical skills, design, business understanding.</div>
          <div className="flex">
            <Button className="bg-red-400 px-6 py-4">How We Work</Button>
            <div className="text-white leading-loose">Contact Us</div>
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
