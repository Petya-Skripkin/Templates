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
            <Styles.List>
                {menu.map(item => (
                    <Styles.Link href={item.link}><li>{item.title}</li></Styles.Link>
                ))}
            </Styles.List>
        </Styles.Content>
    )
}

export default AppHeader;