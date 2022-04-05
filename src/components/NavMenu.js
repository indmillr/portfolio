import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  /* ----- BG Color necessary to hide page text ----- */
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
      color: var(--red);
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
    /* ----- Remove Click Event from SVG ----- */
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px){
    padding: 0;

    /* ----- HIDE NAVMENU with SetState toggle ----- */
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display:block;
    }
    .navItems {
      --top: 1rem;
      transition: .3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        /* ----- Remove Click Event from SVG ----- */
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);

  return (
    <NavMenuStyles>
      <div
        // Hamburger Menu toggle NavMenu
        className='mobile-menu-icon'
        onClick={() => SetShowNav(!showNav)}
        role='button'
        // ACCESSIBILITY
        onkKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          // Close Menu toggle NavMenu
          className='closeNavIcon'
          onClick={() => SetShowNav(!showNav)}
          role='button'
          // ACCESSIBILITY
          onkKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to='/'
            // Close NavMenu on Link click
            onClick={() => SetShowNav(!showNav)}
            role='button'
            // ACCESSIBILITY
            onkKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            // Close NavMenu on Link click
            onClick={() => SetShowNav(!showNav)}
            role='button'
            // ACCESSIBILITY
            onkKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            // Close NavMenu on Link click
            onClick={() => SetShowNav(!showNav)}
            role='button'
            // ACCESSIBILITY
            onkKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            // Close NavMenu on Link click
            onClick={() => SetShowNav(!showNav)}
            role='button'
            // ACCESSIBILITY
            onkKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
