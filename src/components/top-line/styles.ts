import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: ${colors.black};
  color: ${colors.gray};
`;

export const Title = styled.p`
  position: relative;
`;

export const Link = styled.a`
  color: ${colors.gray};
  text-decoration: none;
`;

export const Icon = styled.img`
  position: absolute;
  top: 3px;
  left: -30px;
  width: 16px;
  height: 16px;
`;
