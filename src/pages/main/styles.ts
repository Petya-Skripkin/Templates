import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div``;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1125px) {
    flex-direction: column;
  }
`;

export const ConteinerReverse = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1125px) {
    flex-direction: column-reverse;
  }
`;

export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 1125px) {
    margin-bottom: 40px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;

  @media(max-width: 1125px) {
    flex-wrap: wrap;
  }
`;

export const Text = styled.p`
  width: 471px;
  text-align: center;
  color: white;
`;

export const Buttom = styled.input`
  padding: 11px 22px;
  border: 1px solid white;
  font-size: 16px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0);
  color: white;
  outline: none;
  cursor: pointer;
`;

export const NewArrivals = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72%;

  @media(max-width: 1125px) {
    justify-content: center;
  }
`;

export const Brands = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 40px;
  background-color: ${colors.lightBlack};
`;

export const BrandsImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyleBlock = styled.div`
  margin: 0 15px;
  max-width: 200px;
`;
