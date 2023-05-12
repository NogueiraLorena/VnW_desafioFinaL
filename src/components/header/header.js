import React from "react";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 85vh;
  background-color: #fff;
  background-image: url("https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.rhorizontal.w700.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 1.2rem;

  nav {
    background: opacity#000000 0% 0% no-repeat padding-box;
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    width: 22vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 89px;
    height: 36px;
    margin-left: 1.6rem;
  }

  button {
    font-size: 1rem;

    background: #747474;
    box-shadow: 0px 3px 6px #0000005c;
    border-radius: 18px;
    width: 113px;
    height: 36px;
    color: #fff;
  }

  ul {
    width: 5em;
    height: 2.5em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  .searchIcon {
    width: 40px;
    height: 40px;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <nav>
        <div>
          <img
            src="https://14hp17.csb.app/Grupo%20569.png"
            alt="logo da página de filmes, a DellMovies"
          />
        </div>

        <div>
          <ul>
            <li>Séries</li>
          </ul>
          <button type="button">Filmes</button>
        </div>

        <div>
          <img
            className="searchIcon"
            src="https://14hp17.csb.app/Icon%20ionic-ios-search.png"
            alt="imagem (icone) de uma lupa"
          />
          <ul>
            <li>Filtro</li>
          </ul>

          <ul>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </HeaderStyle>
  );
}
