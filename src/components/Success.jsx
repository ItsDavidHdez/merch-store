import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>*David*, Gracias por tu compra</h2>
        <span>Tu pedido llegará en N días a tu dirección</span>
        <div className="Success-map">***Google MAPS***</div>
      </div>
    </div>
  );
};

export default Success;
