import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Button,
  Select
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { addProductToOrderAction } from "../../actions/actions";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddProductToOrderForm = ({ addNewProduct }) => {
  const classes = useStyles();

  const [category, setCategory] = useState("");

  const handlerAddNewProduct = e => {
    e.preventDefault();

    const productId = Math.floor(Math.random() * 1000);
    const productCategory = category;
    const productName = e.target.productName.value;
    const productPrice = e.target.productPrice.value;
    const productQuantity = e.target.productsQuantity.value;

    const newProduct = {
      productId,
      productCategory,
      productName,
      productPrice,
      productQuantity
    };

    addNewProduct(newProduct);
    e.target.reset();
    setCategory("");
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  return (
    <>
      <p>Add Product</p>
      <form onSubmit={handlerAddNewProduct}>
        <TextField
          name="productName"
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          type="text"
        />
        <TextField
          name="productPrice"
          id="outlined-basic"
          label="Product Price"
          variant="outlined"
          type="number"
        />
        <TextField
          name="productsQuantity"
          id="outlined-basic"
          label="Products Quantity"
          variant="outlined"
          type="number"
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value={"Smartphones"}>Smartphones</MenuItem>
            <MenuItem value={"TV"}>TV</MenuItem>
            <MenuItem value={"PC"}>PC</MenuItem>
            <MenuItem value={"Console"}>Console</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Add product
        </Button>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: newProduct => dispatch(addProductToOrderAction(newProduct))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddProductToOrderForm);
