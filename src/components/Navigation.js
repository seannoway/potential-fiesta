import React from 'react';
import '../styles/navBar.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='navbar' >
            <div>
    {/* <div className="container-fluid"> */}
    <h1 className='headerText'> Sean Holian</h1>
    <ul className="d-flex nav">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('About')}
       

          className={currentPage === 'AboutMe' ?  'nav-link active' : 'nav-link' }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </div>
  );
}


export default Navigation;