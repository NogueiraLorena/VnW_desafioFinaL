import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const FilmesStyle = styled.section`
  padding-left: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  text-align: flex-start;
`;

export const BoxFilms = styled.section`
  width: 22%;
  height: 45%;

  img {
    width: 250px;
    height: 328px;
    margin-top: 1.5rem;
  }
`;

export const BoxTitle = styled.div`
  width: 90%;
`;

export default function Filmes() {
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
    <FilmesStyle id="filmes">
      <BoxTitle>
        <H2>Em Alta</H2>
      </BoxTitle>
      {filmes.map((item) => (
        <BoxFilms>
          <img src={item.image} alt={item.title} />
          <h4> {item.title}</h4>
          <p>{item.release_date}</p>
        </BoxFilms>
      ))}
    </FilmesStyle>
  );
}
