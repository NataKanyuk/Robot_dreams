import React from 'react';
import './products.css';
import product from './product';

function products() {
  const products = [

    { id: 1,
      name: 'flower',
      price: 100,
      description: 'your favorite flower',
      imageUrl: 'src/img/букет.jpeg' 
    },
    { id: 2,
      name: 'flower house',
      price: 150,
      description: 'its a flower_shop',
      imageUrl: 'src/img/приміщення_магазину.jpeg'
    },
    { id: 3,
      name: 'proces',
      price: 200,
      description: 'proces',
      imageUrl: 'src/img/створення_краси.jpeg' 
    }
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default products;