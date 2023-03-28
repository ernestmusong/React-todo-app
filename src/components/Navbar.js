import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useOnClickOutside from './useOnClickOutside';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <nav>
      <ul>
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="about">About</NavLink></li>
        <li><NavLink className="nav-link" to="modal">Modal</NavLink></li>
        <li ref={ref}>
          <button type="button" onClick={() => setDropdown((prev) => !prev)}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
