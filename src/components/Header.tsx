import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="bg-bg-dark">
      <div className="container p-4 mx-auto flex justify-between">
        <Logo title="Agency" />
        <Menu />
        <button className="text-text-light font-extra-bold text-sm px-8 py-3 border border-text-light-gray rounded">CONTACT</button>
      </div>
    </header>
  )
}

export default Header
