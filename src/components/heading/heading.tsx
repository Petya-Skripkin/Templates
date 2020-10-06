import React from 'react';

import * as Styles from './styles';

interface ITitle {
  title?: string;
}

const Heading = ({title}: ITitle) => {
  return (
    <Styles.Content>
      {title}
      <Styles.Line/>
    </Styles.Content>
  )
}

export default Heading;