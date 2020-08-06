import React from "react";
import { FooterBase, FooterImg } from "./styles";
import github from "../../assets/img/GitHub.png";
import gmail from "../../assets/img/Gmail.png";
import linkedin from "../../assets/img/LinkedIn.png";
import telegram from "../../assets/img/Telegram.png";

function Footer() {
  return (
    <FooterBase>
      <p>
        Feito com ❤︎ por Cláudio Henrique durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>

      <a href="https://github.com/01ch01">
        <FooterImg src={github} alt="Logo GitHub" />
      </a>
      <a href="mailto:00claudio.henrique@gmail.com">
        <FooterImg src={gmail} alt="Logo Gmail" />
      </a>
      <a href="https://www.linkedin.com/in/cl%C3%A1udio-henrique-088ab2156/">
        <FooterImg src={linkedin} alt="Logo LinkedIn" />
      </a>
      <a href="https://t.me/claudio_henrique">
        <FooterImg src={telegram} alt="Logo Telegram" />
      </a>
    </FooterBase>
  );
}

export default Footer;
