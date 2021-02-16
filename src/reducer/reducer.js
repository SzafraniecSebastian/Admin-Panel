import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  currentUser: null,
  orders: [
    {
      orderID: "1",
      clientName: "Tom",
      payment: 10,
      orderDate: "",
      deliveryDate: "",
      priority: "low",
      currency: "pln",
      products: [
        {
          productId: 1,
          productName: "11 pro apple",
          productCategory: "Smartphones",
          productPrice: 3000,
          productQuantity: 1
        },
        {
          productId: 2,
          productName: "S20 Samsung",
          productCategory: "Smartphones",
          productPrice: 2000,
          productQuantity: 2
        }
      ]
    }
  ],
  selectedOrder: null,
  productKeyTypeAndProductId: {
    keyType: "",
    productId: ""
  }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.ADD_NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload]
      };

    case actionsTypes.DELETE_ORDER:
      // const mapedOrders = state.orders.map(order => {
      //   if (!payload.includes(order.orderID)) {
      //     return order;
      //   }
      // });

      // const formatedOrder = mapedOrders.filter(order => order !== undefined);

      const filteredOrders = state.orders.filter(
        order => !payload.includes(order.orderID)
      );

      return {
        ...state,
        orders: [...filteredOrders]
      };

    case actionsTypes.SELECT_ORDER:
      const findedOrder = state.orders.find(oneOrder => {
        return oneOrder.orderID === payload;
      });
      return {
        ...state,
        selectedOrder: findedOrder
      };

    case actionsTypes.ADD_PRODUCT_TO_ORDER:
      const mapedOrders = state.orders.map(oneOrder => {
        if (oneOrder.orderID === state.selectedOrder.orderID) {
          oneOrder.products = [...oneOrder.products, payload];
        }
        return oneOrder;
      });

      return {
        ...state,
        orders: [...mapedOrders]
      };

    case actionsTypes.DELETE_PRODUCT:
      const filteredSelectedOrderProducts = state.selectedOrder.products.filter(
        oneProduct => {
          return oneProduct.productId !== payload;
        }
      );

      const mapedOrders2 = state.orders.map(oneOrder => {
        if (oneOrder.orderID === state.selectedOrder.orderID) {
          const mapedProducts = oneOrder.products.filter(oneProduct => {
            return oneProduct.productId !== payload;
          });
          oneOrder.products = [...mapedProducts];
        }
        return oneOrder;
      });

      return {
        ...state,
        orders: [...mapedOrders2],
        selectedOrder: {
          ...state.selectedOrder,
          products: [...filteredSelectedOrderProducts]
        }
      };

    case actionsTypes.SET_PRODUCT_KEY_TYPE:
      let tempProductKeyTypeAndProductId;
      if (
        state.productKeyTypeAndProductId.keyType === payload.keyType &&
        state.productKeyTypeAndProductId.productId === payload.productId
      ) {
        tempProductKeyTypeAndProductId = {
          keyType: "",
          productId: ""
        };
      } else {
        tempProductKeyTypeAndProductId = {
          keyType: payload.keyType,
          productId: payload.productId
        };
      }

      return {
        ...state,
        productKeyTypeAndProductId: tempProductKeyTypeAndProductId
      };

    default:
      return state;
  }
};

export default reducer;
