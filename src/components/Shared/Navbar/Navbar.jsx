import { useContext, useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#085259] font-semibold'
              : 'hover:text-[#085259] transition-colors'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-events"
          className={({ isActive }) =>
            isActive
              ? 'text-[#085259] font-semibold'
              : 'hover:text-[#085259] transition-colors'
          }
        >
          Events
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addEvent"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#085259] font-semibold'
                  : 'hover:text-[#085259] transition-colors'
              }
            >
              Add Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-events"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#085259] font-semibold'
                  : 'hover:text-[#085259] transition-colors'
              }
            >
              My Events
            </NavLink>
          </li>
          
        </>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#085259]">
          Evently
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex gap-6 items-center">{navOptions}</ul>
          {user ? (
            <div className="relative" ref={profileRef}>
              <img
                src={user.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                alt="Profile"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#085259]"
              />
              {profileMenuOpen && (
                <div className="absolute right-0 mt-3 bg-white border rounded-md shadow-lg w-44 py-3 z-50">
                  <p className="text-sm px-4 text-gray-700">{user.displayName}</p>
                  <hr className="my-2" />
                  <button
                    onClick={logOut}
                    className="block w-full text-left text-sm font-medium text-white bg-[#085259] px-4 py-2 rounded hover:bg-opacity-90 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium bg-[#085259] text-white px-5 py-2 rounded hover:bg-opacity-90 transition"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#085259]"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-4">{navOptions}</ul>
          <div className="px-4 pb-4">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#085259]"
                />
                <button
                  onClick={logOut}
                  className="text-sm font-medium bg-[#085259] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block text-center text-sm font-medium bg-[#085259] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
