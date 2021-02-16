import { actionsTypes } from "./actionsTypes";

export const addNewOrderAction = newOrder => {
  return {
    type: actionsTypes.ADD_NEW_ORDER,
    payload: newOrder
  };
};

export const deleteOrdersAction = orders => {
  return {
    type: actionsTypes.DELETE_ORDER,
    payload: orders
  };
};

export const selectOrderAction = id => {
  return {
    type: actionsTypes.SELECT_ORDER,
    payload: id
  };
};

export const addProductToOrderAction = newProduct => {
  return {
    type: actionsTypes.ADD_PRODUCT_TO_ORDER,
    payload: newProduct
  };
};

export const deleteProductAction = id => {
  return {
    type: actionsTypes.DELETE_PRODUCT,
    payload: id
  };
};

export const setProductKeyTypeAndProductIdAction = (keyType, productId) => {
  return {
    type: actionsTypes.SET_PRODUCT_KEY_TYPE,
    payload: {
      keyType,
      productId
    }
  };
};
