import React, {
  Component
} from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    // assim que o componente for mostrado em tela
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('products');
    // response.data.docs
    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;
    // return <h1> Hello Rocketseat {this.state.products.length} </h1>;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="#">Acessar</a>
          </article>
        ))}
      </div>
    )
  }
}
