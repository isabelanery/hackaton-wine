import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul>
          <li className="nav-li">
            <Link to="/">Logo</Link>
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
            <Link to="/">Sacola</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
