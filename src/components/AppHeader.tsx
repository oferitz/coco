import { Link } from '@tanstack/react-router'

export default function AppHeader() {
  return (
    <header className="border-b border-b-yellow-700 p-4">
      <nav className="flex items-center gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </nav>
    </header>
  )
}
