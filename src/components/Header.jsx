import React from 'react';
import logo from '../assets/orario_logo_1.png';
import '../css/header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container-not'>
        {/* Logo + nombre a la izquierda */}
        <div className='logo-not'>
          <img src={logo} alt='Orario Logo' />
          <span className='texto-not'>Orario</span>
        </div>

        {/* Navegación a la derecha */}
        <nav className='nav-links'>
          <a className='linkin' href='#inicio'>
            Contratar
          </a>
          <a className='linkin' href='#servicios'>
            Conoce mas
          </a>
          <a className='linkin' href='#contacto'>
            Contacto
          </a>
          <a href='#login' className='login-btn'>
            Iniciar sesión
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
