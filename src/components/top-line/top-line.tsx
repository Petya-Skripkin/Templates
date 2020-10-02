import React from 'react';

import * as Styles from './styles';

const TopLine = () => {
  return (
    <Styles.Content>
      <p>
        <Styles.Icon src="phone.svg" alt="" />
        8 (812) 123-45-67  |    Работаем 7 дней в неделю    |    9:00 — 18:00
      </p>

      <p>
        <a href="#">
          <Styles.Icon src="login.svg" alt="" />
            Войти / Регистрация
        </a>
      </p>
    </Styles.Content>
  )
}

export default TopLine;