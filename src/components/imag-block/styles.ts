import styled from "styled-components";

export const Title = styled.p`
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: none;
`;

export const Botton = styled.input`
  position: absolute;
  top: 75%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: none;
  padding: 11px 22px;
  border: 1px solid white;
  font-size: 16px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0);
  color: white;
  outline: none;
  cursor: pointer;
`;

export const Content = styled.div<{ img: string }>`
  position: relative;
  width: 100%;
  height: 530px;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100%;
  filter: saturate(0);

  &:hover {
    background: url(${({ img }) => img});
    background-size: 100%;
    background-repeat: no-repeat;
    filter: none;

    ${Title},${Botton} {
      display: inline-block;
    }
  }
`;
