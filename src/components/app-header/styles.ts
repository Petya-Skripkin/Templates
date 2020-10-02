import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  padding-top: 44px;
  color: ${colors.gray};
  background-color: ${colors.lightBlack};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Link = styled.a`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;

    & > li {
        display: inline;
    }

    &:hover {
      color: white;
      background-color: ${colors.toLightBlack};
    }
`;
