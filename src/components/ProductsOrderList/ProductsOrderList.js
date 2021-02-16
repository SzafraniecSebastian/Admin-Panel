import React from "react";
import { connect } from "react-redux";
import { keyTypes } from "../../utiles/keyTypes";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { setProductKeyTypeAndProductIdAction } from "../../actions/actions";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const ProductsOrderList = ({
  selectedOrder,
  productKeyTypeAndProductId,
  setProductKeyTypeAndProductIdAction
}) => {
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
            {productKeyTypeAndProductId.keyType === keyTypes.productName &&
            productId === productKeyTypeAndProductId.productId ? (
              <form>
                <TextField
                  name="productName"
                  id="outlined-basic"
                  label={productName}
                  variant="outlined"
                  type="text"
                />
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </form>
            ) : (
              <h4>{productName}</h4>
            )}
            <button
              onClick={() =>
                setProductKeyTypeAndProductIdAction(
                  keyTypes.productName,
                  productId
                )
              }
            >
              edit
            </button>

            {productKeyTypeAndProductId.keyType === keyTypes.productPrice &&
            productId === productKeyTypeAndProductId.productId ? (
              <form>
                <TextField
                  name="productPrice"
                  id="outlined-basic"
                  label={productPrice}
                  variant="outlined"
                  type="number"
                />
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </form>
            ) : (
              <p>{productPrice}$</p>
            )}
            <button
              onClick={() =>
                setProductKeyTypeAndProductIdAction(
                  keyTypes.productPrice,
                  productId
                )
              }
            >
              edit
            </button>

            {productKeyTypeAndProductId.keyType === keyTypes.productCategory &&
            productId === productKeyTypeAndProductId.productId ? (
              <form>
                <Select
                  value={productCategory}
                  //   onChange={handleCategoryChange}
                  label="Category"
                >
                  <MenuItem value={"Smartphones"}>Smartphones</MenuItem>
                  <MenuItem value={"TV"}>TV</MenuItem>
                  <MenuItem value={"PC"}>PC</MenuItem>
                  <MenuItem value={"Console"}>Console</MenuItem>
                </Select>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </form>
            ) : (
              <p>{productCategory}</p>
            )}
            <button
              onClick={() =>
                setProductKeyTypeAndProductIdAction(
                  keyTypes.productCategory,
                  productId
                )
              }
            >
              edit
            </button>

            {productKeyTypeAndProductId.keyType === keyTypes.productQuantity &&
            productId === productKeyTypeAndProductId.productId ? (
              <form>
                <TextField
                  name="productQuantity"
                  id="outlined-basic"
                  label={productQuantity}
                  variant="outlined"
                  type="number"
                />
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </form>
            ) : (
              <p>quantity: {productQuantity}</p>
            )}
            <button
              onClick={() =>
                setProductKeyTypeAndProductIdAction(
                  keyTypes.productQuantity,
                  productId
                )
              }
            >
              edit
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  selectedOrder: state.selectedOrder,
  productKeyTypeAndProductId: state.productKeyTypeAndProductId
});

const mapDispatchToProps = dispatch => ({
  setProductKeyTypeAndProductIdAction: (keyType, productId) =>
    dispatch(setProductKeyTypeAndProductIdAction(keyType, productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsOrderList);
