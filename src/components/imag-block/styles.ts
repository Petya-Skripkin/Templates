import styled from "styled-components";

export const Content = styled.div<{ img: string }>`
  position: relative;
  width: 55%;
  height: 580px;
  background: url(${({ img }) => img});
  filter: saturate(0);
  margin-bottom: 100px;

  & > p {
    display: none;
    position: absolute;
    top: 55%;
    left: 22%;
  }

  & > input {
    display: none;
    position: absolute;
    top: 75%;
    left: 39.5%;
    color: white;
    background: rgba(0, 0, 0, 0);
    padding: 11px 22px;
    outline: none;
    font-size: 16px;
    text-transform: uppercase;
    border: 1px solid white;
    cursor: pointer;
  }

  &:hover {
    background: url(${({ img }) => img});
    filter: none;

    & > p, input {
      display: inline-block;
    }
  }
`;
