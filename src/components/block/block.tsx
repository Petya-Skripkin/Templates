import React from 'react';

import * as Styles from './styles';

interface IProps {
  imag: string;
  title: string;
  price: string;
}

const Block = ({ imag, title, price }: IProps) => {
  return (
    <Styles.Content>
      <img src= {imag} alt=""/>
      <p>{title}</p>
      {price}
    </Styles.Content>
  )
}

export default Block;