import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 560px;
  color: white;
  background-image: url("./background.png");
  background-size: 100%;

  & > img {
    width: 260px;
  }

  & > p {
    width: 710px;
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
  }
`;
