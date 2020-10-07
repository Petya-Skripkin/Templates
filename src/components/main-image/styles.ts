import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vmax;
  background-image: url("./background.png");
  background-size: 100%;
  background-repeat: no-repeat;
  color: white;
`;

export const Image = styled.img`
  height: 40vmin;

  @media(max-width: 900px) {
    height: 20vmin;
  }
`;

export const Text = styled.p`
  width: 55%;
  text-align: center;
  font-size: 1.2vmax;
  text-transform: uppercase;

  @media(max-width: 900px) {
    width: 90%;
    font-size: 10px;
    margin-bottom: auto;
  }

  @media(max-width: 550px) {
    width: 90%;
    font-size: 7px;
    margin-bottom: auto;
  }
`;
