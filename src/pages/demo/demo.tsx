import React from 'react';
import * as Components from '../../components';

import * as Styles from './styles';

const Demo = () => {
    return (
        <Styles.Conteiner>
            <Components.TopLine />
            <Components.AppHeader 
                logo= "porten.svg"
                menu= {[
                    {
                        title: "Понравилось",
                        link: "#"
                    },
                    {
                        title: "личный кабинет",
                        link: "#"
                    },
                    {
                        title: "настройки",
                        link: "#"
                    },
                ]}
            />
            <Components.MainImage 
                imag= "logo.svg"
                text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra."
            />
        </Styles.Conteiner>
    )
}

export default Demo;