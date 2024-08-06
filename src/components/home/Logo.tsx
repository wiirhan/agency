import { H4 } from '../Typography'

export default function Logo({ title }: { title: string }) {
  return (
    <div className="flex items-center flex-none">
      <img
        src="/logo.svg"
        alt="Logo"
        className="size-12"
      />
      <H4 className="ml-3 text-text-light">{title}</H4>
    </div>
  )
}
