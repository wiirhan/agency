export default function Menu() {
  const menuItems = [
    { title: 'About', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Pricing', href: '#' },
    { title: 'Blog', href: '#' },
  ]

  return (
    <nav className="flex items-center flex-1 mx-auto justify-center">
      <ul className="flex space-x-8">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-text-light"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
