import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/migas.png';

const NavBar = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo}  className="w-20 h-20 text-white p-2"/>
      <span className="ml-3 text-xl">miga-web</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
		<ul className="flex flex-row">
			<li className="mr-5 hover:text-gray-900"><Link to="/">Main</Link></li>
			<li className="mr-5 hover:text-gray-900"><Link to="/Counter">Counter</Link></li>
		</ul>
    </nav>
  </div>
</header>
  );
};

export default NavBar;