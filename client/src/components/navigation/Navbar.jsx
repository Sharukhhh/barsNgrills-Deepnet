import React , {useState} from 'react'
import logo from '../../../public/DNS.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">

            <span  className="flex items-center ms-4 w-24 h-24">
                <img src={logo} alt="" className='object-contain' />
            </span>

            <button
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                aria-controls="navbar-solid-bg"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>

            <div className={`w-full lg:block lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
                <ul className="flex flex-col mt-4 cursor-pointer text-base rounded-lg text-white font-mono lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent ">
                    <li>
                        <p
                            className="block py-2 pl-3 pr-4 lg:bg-transparent lg:p-0 hover:scale-90"
                            aria-current="page">
                            HOME
                        </p>
                    </li>
                    <li>
                        <p
                            className="block py-2 pl-3 pr-4 lg:bg-transparent text-blue-400 lg:p-0 hover:scale-90"
                            aria-current="page">
                            MENU
                        </p>
                    </li>
                    <li>
                        <p
                            className="block py-2 pl-3 pr-4 lg:bg-transparent lg:p-0 hover:scale-90"
                            aria-current="page">
                            MAKE A RESERVATION
                        </p>
                    </li>
                    <li>
                        <p
                            className="block py-2 pl-3 pr-4 lg:bg-transparent lg:p-0 hover:scale-90"
                            aria-current="page">
                            CONTACT US
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar