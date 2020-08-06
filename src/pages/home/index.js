import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const HomeWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <HomeWrapper>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Não importa em que campo você queira entrar, a Ciência da Computação está mudando esse setor. Aprenda sobre esse novo 'superpoder' que não está sendo ensinado em 90% das escolas dos EUA."
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </HomeWrapper>
  );
}

export default Home;
