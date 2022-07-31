import React from 'react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsYoutube,
} from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <div>
        <h3>Conecte-se com a gentegit !</h3>
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <div>
        <div>
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
          <p>
            SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO.
            A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
