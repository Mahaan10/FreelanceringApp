import { NavLink } from "react-router-dom";

export default function CustomNavlink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-400/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <ul>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? `bg-primary-100/80 text-primary-900 ${navLinkClass}`
              : `${navLinkClass} text-secondary-600`
          }
        >
          {children}
        </NavLink>
      </li>
    </ul>
  );
}
