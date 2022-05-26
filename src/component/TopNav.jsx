import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const TopNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => { setCollapsed(!collapsed)};
  return (
    <>
      <Navbar light>
        <NavbarBrand href="/" className="navbar-brand">TOUR GALLERY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar className="text-end">
            <NavItem>
              <NavLink>카테고리1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>카테고리2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>카테고리3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>카테고리4</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default TopNav