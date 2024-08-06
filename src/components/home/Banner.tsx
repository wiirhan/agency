import Button from '../common/Button'
import { H1, H5, Text } from '../Typography'
import Quote from './Quote'

export default function Banner() {
  return (
    <section className="bg-bg-dark pt-[114px]">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-y-6">
          <H5 className="text-text-dark-accent">Modern Studio</H5>
          <H1 className="text-white max-w-[513px] max-md:text-4xl max-md:leading-[49px]">
            We&apos;re Here <br />
            To Build Your <br />
            Dream Project
          </H1>
          <Text className="max-w-[470px] text-white/60">Agency provides a full service range including technical skills, design, and business understanding.</Text>
          <div className="flex items-center gap-x-12">
            <Button className="bg-red-400 px-6 py-4">How We Work</Button>
            <a
              href="#contact"
              className="text-white leading-loose hover:underline"
            >
              Contact Us
            </a>
          </div>
          <Quote />
        </div>
        <div className="flex-none">
          <img
            className="w-[570px] h-[601px]"
            src="./pic.svg"
            alt="Illustration of our work"
          />
        </div>
      </div>
    </section>
  )
}
