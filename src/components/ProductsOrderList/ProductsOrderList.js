import React from "react";
import { connect } from "react-redux";

const ProductsOrderList = ({ selectedOrder }) => {
  return (
    <ul>
      {selectedOrder.products.map(product => {
        const {
          productId,
          productName,
          productCategory,
          productPrice,
          productQuantity
        } = product;

        return (
          <li key={productId}>
            <h4>{productName}</h4>
            <p>{productPrice}$</p>
            <p>{productCategory}</p>
            <p>quantity: {productQuantity}</p>
            <button>edit</button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  selectedOrder: state.selectedOrder
});

export default connect(mapStateToProps)(ProductsOrderList);
