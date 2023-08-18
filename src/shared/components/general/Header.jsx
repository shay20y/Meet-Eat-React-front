import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY } from '../../services/userService';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { USER_INFO_KEY } from '../../constant/constant';

export default function Header() {
  const nav = useNavigate();
  const { userInfo, userSignOut } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  }, [userInfo]);

  const onLogOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_INFO_KEY);
    userSignOut();
    nav('/');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='mb-5'>
      <div className="mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="logo">
              <Link to="/">
                <img className="w-24" src="/public/img/logos/(1).png" alt="" />
              </Link>
            </div>

            <ul className="hidden sm:flex space-x-4">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={`/ManageEvents`}>Manage Events</Link>
              </li>
              <li>
                <Link to={`/createEvent`}>create Event</Link>
              </li>
              <li>
                <Link to={`/findByCat`}>find recipe</Link>
              </li>
            </ul>
          </div>

          {localStorage[TOKEN_KEY] && userInfo != null ? (
            <div className="flex items-center">
              <p className="p-2">{userInfo.name} </p>
              <button
                onClick={onLogOut}
                className="ml-4 px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="log_in ">
                <Link
                  to="/login"
                  className="mr-4 px-4 py-2 text-white bg-blue-600 hover:bg-green-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-green-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}

          <div className="sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-600 focus:outline-none focus:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to={'/'}
                  onClick={handleMenuToggle}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/ManageEvents`}
                  onClick={handleMenuToggle}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Manage Events
                </Link>
              </li>
              <li>
                <Link
                  to={`/createEvent`}
                  onClick={handleMenuToggle}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  create Event
                </Link>
              </li>
              <li>
                <Link
                  to={`/findByCat`}
                  onClick={handleMenuToggle}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  find recipe
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}