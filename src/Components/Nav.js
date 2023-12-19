import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'

const Nav = () => {
    
    return (
        <>



       <header className={classes['header_section']}>
      <nav className={"navbar navbar-expand-lg " +  classes['custom_nav-container']}  >
        <NavLink className={"navbar-brand " + classes["navbar-brand"]} to="/">
          <span>
            E-COMMERCE
          </span>
        </NavLink>
        <button className={"navbar-toggler " + classes["navbar-toggler"] } type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button> 
{/* <button className={"navbar-toggler" + classes["navbar-toggler"] } type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""></span>
    </button> */}
        <div className={"navbar-collapse collapse " +  classes['navbarSupportedContent']}  id="navbarSupportedContent">
          <ul className={"navbar-nav " +  classes["navbar-nav"] + " " + classes['nav-link']}>
          
          <li className="nav-item " >
              <NavLink className={ `navbar-nav ${ classes["navbar-nav"]} ${classes['nav-link']}`  } to="/" end>
              Home 
              </NavLink>
              </li>
            
            <li className="nav-item">
              <NavLink className={  `navbar-nav ${ classes["navbar-nav"]} ${classes['nav-link']}`  } to="shop" end>
                Shop
              </NavLink>
            </li>
           
          

            <li className="nav-item">
              <NavLink className={ `navbar-nav ${ classes["navbar-nav"]} ${classes['nav-link']}`  } to="details" end>
                Why Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={`navbar-nav ${ classes["navbar-nav"]} ${classes['nav-link']}`} to="contact" end>Contact Us</NavLink>
            </li>
          </ul>
          <div className={classes["user_option"]}>
            <NavLink to="/login">
            <FontAwesomeIcon icon={faUser} />
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>
                Login
              </span>
            </NavLink>
            <NavLink to="cart">
            <FontAwesomeIcon icon={faBagShopping} />
            <span className={"rounded-circle " + classes["nav-cart-count"]}>
    
            </span>
            </NavLink>
            <form className="form-inline ">
              <button className="btn nav_search-btn" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header> 

        </>
    );
}

export default Nav;
