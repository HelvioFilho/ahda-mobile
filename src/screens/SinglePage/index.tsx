import React from 'react';
import { ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { Container, ContainerHtml } from './styles';

export function SinglePage() {
  const url = `<p>dsadasdasd</p><p>dasdasd</p><p>dsadas</p><p>dasd</p><p><br></p><p><img src="http://ahoradoanjo.hsvf.com.br/img/post/9/img_95629.jpg"></p><p><br></p><h2 style="color: rgb(0, 97, 0);">ddadasdasdas</h2>
  <p><br></p><p>texto esquerdo</p><p class="ql-align-center">texto meio</p><p class="ql-align-right">texto direito</p>
  <p class="ql-align-justify">texto justificado</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">
  <span style="color: rgb(230, 0, 0);">cor diferente</span></p><p class="ql-align-justify"><span style="color: rgb(0, 97, 0);">
  outra cor</span></p><p class="ql-align-justify"><em>italico</em></p><p class="ql-align-justify"><strong>blod</strong></p>
  <p class="ql-align-justify"><s>Sublinhado</s></p><p class="ql-align-justify"><u>outline</u></p><p class="ql-align-justify">
  <br></p><ul><li class="ql-align-justify">faz um</li><li class="ql-align-justify">faz dois</li><li class="ql-align-justify">
  outra parte da lista</li><li class="ql-align-justify">outro ponto</li></ul><p class="ql-align-justify"><br></p><p 
  class="ql-align-justify">Fim da <a href="https://google.com" target="_blank">transmissão</a></p>`;

  let NewText = url.replace(/class="ql-align-center"/g, `style="text-align: center"`);
  NewText = NewText.replace(/class="ql-align-right"/g, `style="text-align: right"`);
  NewText = NewText.replace(/class="ql-align-justify"/g, `style="text-align: justify"`);
  NewText = NewText.replace(/<p><img/g, `<img`);
  NewText = NewText.replace(/"><\/p>/g, `">`);

  const source = {
    html: NewText,
  }
  const tagsStyles = {
    h2: {
      color: 'black',
      margin: '0',
    },
    p: {
      color: 'black',
      margin: '0',
    },
    ul: {
      margin: '0',
    }
  };
  const { width } = useWindowDimensions();
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ContainerHtml>
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
          />
        </ContainerHtml>
      </ScrollView>
    </Container>
  );
}