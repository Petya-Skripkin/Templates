import React from 'react';

import Heading from './../heading';
import * as Styles from './styles';

interface IProps {
  imag: string,
  title: string,
  button: string,
  onClick: () => void,
}

const ImagBlock = ({imag, title, button, onClick}: IProps) => {
  return (
    <Styles.Content img={imag}>
      <p>
        <Heading
          title={title}
        />
      </p>
      <input type= 'button' value= {button} onClick= {onClick} />
    </Styles.Content>
  )
}

export default ImagBlock;