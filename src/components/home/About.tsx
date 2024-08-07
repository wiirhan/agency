import Button from '../common/Button'

export default function About() {
  const icons = ['./digitalside.svg', './wortex.svg', './explorer.svg', './fuzion.svg', 'mediafury.svg']
  return (
    <div className="bg-[#FDF0E9] pt-[73px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-10">
          {icons.map((icon, index) => (
            <img
              key={index}
              className="w-36 h-10"
              src={icon}
            />
          ))}
        </div>
        <div className="w-full h-px bg-red-200 mt-[72px] mb-[101px]" />
        <div className="flex justify-between items-center gap-10">
          <img
            className="w-full"
            src="./pic-about.svg"
            alt="about"
          />
          <div>
            <div className="text-red-400 uppercase leading-loose tracking-widest">About</div>
            <div className="text-orange-950 text-6xl mt-5 font-extra-bold text-h2 leading-h2 tracking-h2">
              An Experience <br />
              Design Agency
            </div>
            <div className="text-orange-950 text-xl leading-loos mt-6">Provides a full service range</div>
            <div className="text-text-dark-gray leading-loose mt-4">
              Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
            </div>
            <Button className="bg-white rounded-md shadow text-orange-950 py-4 px-8 hover:bg-orange-50 mt-[34px]">ABOUT US</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
