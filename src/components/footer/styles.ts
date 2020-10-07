import styled from "styled-components";

import { colors } from '../../constants';

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-top: 1px solid black;
  background-color: ${colors.lightBlack};
  color: white;
`;

export const Link = styled.a`
  color: white;
`;
