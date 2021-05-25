import React from 'react';

function NavItem({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center pt-6">
      <Icon className="h-8 mx-4 group-hover:animate-bounce" />
      <p className="text-center opacity-0 group-hover:opacity-100 tracking-wider">{title}</p>
    </div>
  );
}

export default NavItem;
