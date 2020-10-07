import React from 'react';

import Title from '../styles';
import * as Styles from './styles';

interface IProps {
  imag: string,
  title?: string,
  button?: string,
  onClick?: () => void,
}

const ImagBlock = ({ imag, title, button, onClick }: IProps) => {
  return (
    <Styles.Content img={imag}>
      {(title && button) &&
        <>
          <Styles.Title>
            <Title>{title}</Title>
          </Styles.Title>
          <Styles.Botton type='button' value={button} onClick={onClick} />
        </>
      }
    </Styles.Content>
  )
}

export default ImagBlock;