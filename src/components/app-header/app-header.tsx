import React from 'react';

import * as Styles from './styles';

const AppHeader = () => {
    return (
        <Styles.Content>
            <img src="porten.svg" alt=""/>
            <Styles.List>
                <Styles.Link><li>Понравилось</li></Styles.Link>
                <Styles.Link><li>личный кабинет</li></Styles.Link>
                <Styles.Link><li>настройки</li></Styles.Link>
            </Styles.List>
        </Styles.Content>
    )
}

export default AppHeader;