import React from 'react';

import * as Styles from './styles';
import * as Components from '../../components';

import { MOCK, MOCK__LINK, LAST__MOCK, BRANDS } from './mock';

const Main = () => (
  <Styles.Content>
    <Components.TopLine />
    <Components.AppHeader
      logo="porten.svg"
      menu={MOCK__LINK}
    />
    <Components.MainImage
      imag="logo.svg"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra."
    />

    <Styles.Conteiner>
      <Styles.FlexContent>
        <Components.Title>СЕЗОН 2020/21</Components.Title>
        <Styles.Flex>
          {MOCK.map(item => (
            <Styles.StyleBlock>
              <Components.Block
                imag={item.imag}
                title={item.title}
                price={item.price}
              />
            </Styles.StyleBlock>
          ))}
        </Styles.Flex>
      </Styles.FlexContent>
      <Components.ImagBlock
        imag="./bg.svg"
        title="новая коллекция"
        button="каталог"
        onClick={() => console.log("hello")}
      />
    </Styles.Conteiner>

    <Styles.ConteinerReverse>
      <Components.ImagBlock
        imag="./bg1.svg"
      />
      <Styles.FlexContent>
        <Components.Title>коллекция 2018</Components.Title>
        <Styles.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </Styles.Text>
        <Styles.Buttom type='button' value='посмотреть коллекцию' />
      </Styles.FlexContent>
    </Styles.ConteinerReverse>

    <Styles.FlexContent>
      <Components.Title>новые поступления</Components.Title>
      <Styles.NewArrivals>
        {LAST__MOCK.map(item => (
          <Styles.StyleBlock>
            <Components.Block
              imag={item.imag}
              title={item.title}
              price={item.price}
            />
          </Styles.StyleBlock>
        ))}
      </Styles.NewArrivals>
    </Styles.FlexContent>

    <Styles.Brands>
      <Components.Title>новые поступления</Components.Title>
      <Styles.BrandsImage>
        {BRANDS.map(item => (
          <img src={item.imag} alt='' />
        ))}
      </Styles.BrandsImage>
    </Styles.Brands>

    <Components.Footer />
  </Styles.Content>
)

export default Main;