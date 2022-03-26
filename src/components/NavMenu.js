import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 1rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  @media any screen and (max-width: 770px){
    .mobile-menu-icon {
      
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <div className='mobile-menu-icon'>
        <MdMenu />
      </div>
      <ul>
        <div className='closeNavIcon'>
          <MdClose />
        </div>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
