import React from "react";
import styled from "styled-components";

export const MainStyle = styled.main`
  color: white;

  .movieDescription {
    height: 545px;
    padding-left: 6em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%)
      0% 0% no-repeat padding-box;
    position: relative;
    bottom: 25rem;
   
  }

  .titlesContainer {
    width: 35%;
    height: 7rem;
  }

  p {
    font-size: 0.7rem;
    position: relative;
    bottom: 1.3rem;
  }

  .containerStar {
    position: relative;
    bottom: 1.3rem;
    width: 14%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h2 {
    font-weight: 200;
    letter-spacing: 0px;
    color: #f6f6f6;
  }

  h3 {
    letter-spacing: -1px;
    color: #000;
    font-weight: 700;
    background-color: #f3cd32;
    border-radius: 10%;
  }

  img {
    width: 22px;
    height: 22px;
  }

  .paragraphContainer {
    width: 40.4vw;
    height: 15vh;
  }

  .content {
    font-size: 1.4rem;
    text-align: left;
    letter-spacing: 0.17px;
    color: #f6f6f6;
    font-weight: 90;
  }

  .buttonsConteiner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 27%;
    height: 4rem;
  }

  .buttonOne {
    width: 186px;
    height: 51px;
    background: #d53a00 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 2.2rem;
    color: #fff;
  }

  .buttonTwo {
    color: #fff;
    width: 173px;
    border-radius: 2.2rem;
    background: #717171 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    height: 51px;
  }

  .listContainer {
    margin-top: -15rem;
    margin-bottom: 5rem;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    list-style: none;
    height: 5vh;
    width: 77rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
  }
`;

export default function Main() {
  return (
    <MainStyle>
      <div className="movieDescription">
        <span className="titlesContainer">
          <h1>Avatar: o Caminho da Água</h1>
          <p>3hr 23 min | Fantasia, Família | 2023 </p>
        </span>

        <span className="containerStar">
          <img
            src="https://14hp17.csb.app/Icon%20awesome-star@2x.png"
            alt="imagem de uma estrela"
          />
          <h2>9,9/10</h2>
          <h3>IMDb</h3>
        </span>

        <span className="paragraphContainer">
          <p className="content">
            Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
            ficarem juntos. No entanto, eles devem sair de casa e explorar as
            regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
            travar uma guerra difícil contra os humanos.
          </p>
        </span>

        <span className="buttonsConteiner">
          <button className="buttonOne">▶ Assistir agora</button>
          <button className="buttonTwo">🎞 Trailer</button>
        </span>
      </div>

      <div className="listContainer">
        <ul>
          <li>Popular</li>

          <li>Drama</li>

          <li>Ação</li>

          <li>Aventura</li>

          <li>Comédia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Família</li>
        </ul>
        <img
          src="https://14hp17.csb.app/Icon%20ionic-ios-search.png"
          alt="imagem (icone) de uma lupa"
        />
      </div>
    </MainStyle>
  );
}
