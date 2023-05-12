import React from "react";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #000;
  height: 20vh;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15vh;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div>
        <img
          src="https://14hp17.csb.app/componentFooter.jpg"
          alt="imagem de uma estrela"
        />
      </div>
    </FooterStyle>
  );
}
