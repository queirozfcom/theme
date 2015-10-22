import React from 'react';
import ReviewStore from  '../../stores/ReviewStore'
class Review extends React.Component {

  render() {
    //let starts = 5;
    let title = 'este é um review de merda';
    let description = 'uma descrição bem ruim e agora? achoq ahhahah';


    // // Pega o parametro slug da rota

    let productId = this.props.productId;

    // Pega o estado atual da ProductStore
    let ProductStore = ReviewStore.getState();
    // Pega o produto com o slug da rota
    let product = ProductStore.get(productId);
    console.log(product)
    var apps = product.reviews.map(function(review) {
      return (
        <p> Nota: {review.rating} </p>
      )
    })

    return (
      <div>
       <ul>{apps}</ul>

        <p>Titulo: {title} </p>
        <p>Descrição: {description}</p>
      </div>
    );
  }
}

export default Review;
