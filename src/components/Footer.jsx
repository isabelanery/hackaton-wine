import React from 'react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsYoutube,
} from 'react-icons/bs';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <h3>Conecte-se com a gente!</h3>
        <div className="social-icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>

      <div className="footer-content-container">
        <div className="comercial-info">
          <p>
            W2W E-Commerce de Vinhos S.A
            CNPJ: 09.813.204/0002-05
          </p>
          <p>
            Rua Comendador Alcides Simão Helou, 1565
            Serra - ES - CEP 29168-090
          </p>
        </div>

        <div>
          <p className="warning">
            SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO.
            A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
