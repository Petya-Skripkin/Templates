import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  & > div:last-child {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: ${colors.lightBlack};
    border-top: 1px solid black;

    & > a {
      color: white;
    }
  }
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.p`
  color: white;
  width: 471px;
  text-align: center;
`;

export const Buttom = styled.input`
  color: white;
  background: rgba(0, 0, 0, 0);
  padding: 11px 22px;
  outline: none;
  font-size: 16px;
  text-transform: uppercase;
  border: 1px solid white;
  cursor: pointer;
`;

export const NewArrivals = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72%;
`;

export const Brands = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightBlack};
  padding: 40px;

  & > div:last-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
