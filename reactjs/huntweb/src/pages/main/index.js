import React, {
  Component
} from 'react';
import api from '../../services/api';

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
    // return <h1> Hello Rocketseat {this.state.products.length} </h1>;
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    )
  }
}
