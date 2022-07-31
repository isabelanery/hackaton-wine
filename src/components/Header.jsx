import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaShoppingBag } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul>
          <li className="nav-li">
            <Link to="/">
              <img src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="logo da Wine" />
            </Link>
          </li>

          <li className="nav-li">
            <Link to="/">Clube</Link>
          </li>

          <li className="nav-li">
            <Link to="/">Produtores</Link>
          </li>

          <li className="nav-li">
            <Link to="/">Ofertas</Link>
          </li>

          <li className="nav-li">
            <Link to="/">Baixe o App</Link>
          </li>

          <li className="nav-li">
            <Link to="/">Loja</Link>
          </li>

          <li className="nav-li">
            <Link to="/">Perfil</Link>
          </li>

          <li className="nav-li">
            <Link to="/">
              <FaShoppingBag />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
