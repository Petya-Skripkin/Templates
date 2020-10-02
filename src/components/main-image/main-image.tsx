import React from 'react';

import * as Styles from './styles';

interface IProps {
  imag: string;
  text: string;
}

const MainImage = ({ imag, text }: IProps) => {
  return (
    <Styles.Content>
      <img src={imag} alt="" />
      <p>{text}</p>
    </Styles.Content>
  )
}

export default MainImage;