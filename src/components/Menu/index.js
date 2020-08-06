import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import { Link } from "react-router-dom";
import { LogoImg, MenuWrapper } from "./styles";
import Button from "../Button";
function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImg className="Logo" src={Logo} alt="Reactflix logo"></LogoImg>
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/video">
        Adicionar Vídeo
      </Button>
    </MenuWrapper>
  );
}
export default Menu;
