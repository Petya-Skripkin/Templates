import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background-color: ${colors.lightBlack};

  @media(max-width: 1125px) {
    height: 40px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  text-decoration: none;
  color: ${colors.gray};
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${colors.toLightBlack};
  }
`;

export const List = styled.li`
  display: inline;
`;
