import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>

          <li>
            <Link to="/">Clube</Link>
          </li>

          <li>
            <Link to="/">Produtores</Link>
          </li>

          <li>
            <Link to="/">Ofertas</Link>
          </li>

          <li>
            <Link to="/">Eventos</Link>
          </li>

          <li>
            <Link to="/">Baixe o App</Link>
          </li>

          <li>
            <Link to="/">Lupa</Link>
          </li>

          <li>
            <Link to="/">Perfil</Link>
          </li>

          <li>
            <Link to="/">Sacola</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
