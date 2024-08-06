import { Text } from '../Typography'

export default function Quote() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full bg-purple-500 rounded-full" />
        <img
          className="absolute w-9 h-11 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="./Bitmap.svg"
          alt="Profile"
        />
      </div>
      <figure className="flex flex-col">
        <blockquote>
          <Text className="text-white/60">Put themselves in the merchant&apos;s shoes</Text>
        </blockquote>
        <figcaption>
          <Text className="text-white">Meta Inc.</Text>
        </figcaption>
      </figure>
    </div>
  )
}
