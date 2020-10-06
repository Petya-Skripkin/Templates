import styled from "styled-components";

import { colors } from "../../constants";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 44px;
  color: ${colors.gray};
  background-color: ${colors.black};
  z-index: 10;

  & > p {
    position: relative;

    & > a {
      color: ${colors.gray};
      text-decoration: none;
    }
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 3px;
  left: -30px;
`;

export const Login = styled.div``;
