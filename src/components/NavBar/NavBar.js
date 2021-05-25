import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, SearchIcon } from '@heroicons/react/outline';
import NavItem from './NavItem';

function NavBar() {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <h1 className="font-sans m-8 text-center text-4xl">The Super Handbook</h1>
      <div className="flex flex-row justify-center sm:justify-start">
        <Link to="/">
          <NavItem title="Home" Icon={HomeIcon} />
        </Link>
        <Link to="/search">
          <NavItem title="Search" Icon={SearchIcon} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
