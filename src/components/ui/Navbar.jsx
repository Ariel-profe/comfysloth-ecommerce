import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logo from '/assets/imgs/logo.svg';
import {FaBars} from 'react-icons/fa';

import { ProductsContext, UserContext } from '../../context';
import { links } from '../../utils/constants';
import { CartButtons } from '../cart/CartButtons';


export const Navbar = () => {

  const {openSidebar} = useContext(ProductsContext);
  const {myUser} = useContext(UserContext);

  return(
    <NavbarContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth logo" />
          </Link>
          <button
            className="nav-toggle"
            type="button"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map( (link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={ ({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {
            myUser && <li>
                        <NavLink to='/checkout' className={({ isActive }) => "nav-item nav-link " + (isActive ? 'active' : '')} >checkout</NavLink>
                    </li>
          }
        </ul>
        <CartButtons />
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: var(--clr-primary-5);
          transition: all .5s ease;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`