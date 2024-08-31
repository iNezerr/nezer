import React from 'react';
import NavLink from './components/NavLink';

interface NavLinkProps {
  href: string;
  title: string;
}

interface MenuOverlayProps {
  links: NavLinkProps[]; 
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex py-4 flex-col items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
