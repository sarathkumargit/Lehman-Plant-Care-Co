import { NavLink as RouterNavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

export default function NavLink({ href, label, onClick }) {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'relative text-sm font-medium transition-colors duration-200',
          'after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-emerald-500 after:transition-all after:duration-300',
          isActive
            ? 'text-emerald-600 after:w-full'
            : 'text-gray-500 hover:text-gray-900 after:w-0 hover:after:w-full'
        )
      }
    >
      {label}
    </RouterNavLink>
  )
}