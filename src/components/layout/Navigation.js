import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className='my-2' color='dark' dark>
      <NavbarBrand href='/'>
        <img
          alt='logo'
          src='/logo-white.svg'
          style={{
            height: 40,
            width: 40
          }}
        />
        Reactstrap
      </NavbarBrand>
    </Navbar>
  );
};

export default Navigation;
