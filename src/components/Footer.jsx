import React from 'react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsYoutube,
} from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <div>
        <h3>Alguma dúvida? A gente ajuda você!</h3>
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <div>
        <p>
          SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO.
          A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
