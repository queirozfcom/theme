import React from 'react';
import ReviewStore from  '../../stores/ReviewStore'
import {actions,stores} from 'sdk';


class Review extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount() {
  // Escuta as mudanças da "ProductStore", registramos o método "onChange" como callback
    ReviewStore.listen(this.onChange);

    let productId = this.props.productId;

    console.log(ReviewStore)

    if (!ReviewStore.getState().get(productId)) {
      actions.ResourceActions.getRouteResources(productId, 'reviews', this.props.params);
    }
  }


  // O React chamará esse método quando o componente está saindo da tela
  componentWillUnmount() {
    // Para de escutar as mudanças
    ReviewStore.unlisten(this.onChange);
  }

    // Esse método será chamado toda vez que a "ProductStore" mudar
  onChange = () => {
    console.log('entrou')
    // Muda o estado do componente, isso fará com que ele renderize novamente
    this.setState({
      // Pega o estado atual da store (provavelmente agora ela terá os dados do produto)
      reviews: ReviewStore.getState().get(this.props.productId)
    });
  }

  render() {

    //let starts = 5;
    let title = 'este é um review de merda';
    let description = 'uma descrição bem ruim e agora? achoq ahhahah';

    console.log('cadeee',this.state.reviews);
    // var apps = product.reviews.map(function(review) {
    //   return (
    //     <p> Nota: {review.rating} </p>
    //   )
    // });


    return (
  <div>
    <p>Titulo: {title} </p>
    <p>Descrição: {description}</p>
  </div>
    );
  }
}

export default Review;
