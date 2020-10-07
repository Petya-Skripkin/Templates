import React from 'react';

import * as Styles from './styles';

interface IProps {
  imag: string;
  text: string;
}

const MainImage = ({ imag, text }: IProps) => {
  return (
    <Styles.Content>
      <Styles.Image src={imag} alt=" "/>
      <Styles.Text>{text}</Styles.Text>
    </Styles.Content>
  )
}

export default MainImage;