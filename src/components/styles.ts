import styled from "styled-components";

const Title = styled.p`
  margin: none;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  color: white;

  &::after {
    content: "";
    display: block;
    width: 120px;
    margin: 20px auto 0;
    border: 1px solid white;
  }
`;

export default Title;