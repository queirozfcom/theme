import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import './AboutPage.less';

class AboutPage extends React.Component {
  componentWillMount() {
    console.log('vou montar o about');
  }

  render() {
    return (
      <div>
        <Header areaPath="about" />
          <div className="content-box">
            <h1 className="cor-secundaria h1">Quem somos</h1>
              <p>Meu nome é <a href="http://danielasoria.com.br" target="_blank">Daniela Soria</a>.&nbsp;
              Sou instrutora de Pilates há 9 anos. Desde então, me envolvi nesse mundo fascinante do Pilates do qual fazem parte o&nbsp;
              <a href="http://pt.wikipedia.org/wiki/Joseph_Pilates" target="_blank">Joseph</a>, o movimento,
              a biomecânica, a anatomia, os aparelhos, os acessórios, os instrutores, os praticantes,
              as meias&nbsp;(ou meinhas, ou sapatilhas, como prefiram). Pois é, sou&nbsp;apaixonada pelas meias!
              E sei que muitas pessoas também. Afinal, além de funcionais, graças ao antiderrapante, elas te deixam
              charmosa até na aula de Pilates. Foi por isso que tive a idéia de reunir em uma loja as melhores marcas
              e modelos de meias e sapatilhas com antiderrapante, nacionais e importadas.</p>
              <p>Se você também é apaixonada por todo esse universo do Pilates, você é uma Pilates Lover!</p>
              <p><strong>Daniela Soria</strong><br/>
              Pilates Lovers</p>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;
