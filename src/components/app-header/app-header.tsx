import React from 'react';

import * as Styles from './styles';

interface IMenu {
    title: string;
    link: string;
}

interface IProps {
    logo: string;
    menu: IMenu[];
}

const AppHeader = ({ logo, menu }: IProps) => {
    return (
        <Styles.Content>
            <img src={logo} alt="" />
            <Styles.Menu>
                {menu.map(item => (
                    <Styles.Link href={item.link}><Styles.List>{item.title}</Styles.List></Styles.Link>
                ))}
            </Styles.Menu>
        </Styles.Content>
    )
}

export default AppHeader;