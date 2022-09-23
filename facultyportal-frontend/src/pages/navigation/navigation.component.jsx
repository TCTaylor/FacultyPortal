import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as FPLogo } from '../../assets/apple-black-shape-svgrepo-com.svg';

function Navigation() {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <FPLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/faculty-courses'>
              Courses
            </Link>
            <Link className='nav-link' to='/sign-in'>
              Sign In
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;