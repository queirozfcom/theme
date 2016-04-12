import React from 'react';
import './PoliciesPage.less';

class PoliciesPage extends React.Component {
  render() {
    return (
      <div>
        <div className="content-box">
          <h1 className="cor-secundaria h1">Política de troca e devolução</h1>
            <p>A loja <strong>Pilates Lovers</strong> efetuará a troca dos produtos adquiridos por você,
              de acordo com o previsto no Código de Defesa do Consumidor. O período para se efetuar
              a troca ou devolução do produto é de 7 (sete) dias corridos a contar da data do
              recebimento do mesmo. Os custos de envio do produto de volta para a <strong>Pilates Lovers</strong> são por conta do cliente. Lembre-se de avisar
              por e-mail (loja@pilateslovers.com.br)
              o motivo da troca ou devolução. Não aceitaremos produtos enviados sem comunicado prévio.
              A partir do recebimento do produto a ser trocado, nós teremos 5 (cinco) dias corridos
              para fazer a postagem da nova mercadoria (em caso de troca).</p>

          <p>Existem algumas regras a serem seguidas para que possamos efetuar a troca:</p>

          <ul>
            <li>Só serão aceitos produtos não lavados, não usados e sem odores;</li>
            <li>O produto deve estar intacto e com as devidas etiquetas e embalagens;</li>
            <li>Itens que tenham sofrido qualquer tipo de alteração não serão aceitos;</li>
          </ul>

          <p>No caso de devolução do produto, faremos a devolução do valor dos itens (o valor do frete não será
            devolvido) assim que o mesmo for disponibilizado em nossa conta. Isso varia de acordo com o meio de
            pagamento, e no caso de cartão de crédito, pode chegar a 60 dias. A devolução será feita através de
            depósito em conta bancária especificada pelo cliente.</p>

          <p>Nosso maior objetivo é que nossos cliente fiquem satisfeitos com suas compras e com o atendimento
            recebido. Faremos sempre o melhor possível para resolver qualquer troca ou devolução.</p>

          <p>Daniela Soria<br/>
            <strong>Pilates Lovers</strong></p>

          </div>
        <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default PoliciesPage;
