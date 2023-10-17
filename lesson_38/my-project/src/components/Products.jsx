import Product from './Product';
import './Products.css';

export default function Products(props) {

  return (
    <div className="products">
      <Product addProductToCart={props.addProductToCart} products={props.products}></Product>
    </div>
  );
};