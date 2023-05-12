import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import styled from "styled-components";

const ContainerCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselTitle = styled.h2`
  position: relative;
  right: 24.4em;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000069;
`;

export default function CarouselComponent() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=32c43fad4bcc0b4ba54eb584ce7ec112&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          };
        });
        setFilmes(allApi);
      })
      .catch((error) =>
        alert(`desculpe, você teve um erro de requisição ${error}`)
      );
  };

  return (
    <ContainerCarousel>
      <CarouselTitle>Últimos lançamentos</CarouselTitle>
      <Carousel itemsToScroll={3} itemsToShow={5} itemPadding={[30, 30]}>
        {filmes.map((item) => (
          <div>
            <img src={item.image} style={{ width: "90%" }} />
            <p> {item.title}</p>

            <CarouselTitle>{item.title}</CarouselTitle>
          </div>
        ))}
      </Carousel>
    </ContainerCarousel>
  );
}
