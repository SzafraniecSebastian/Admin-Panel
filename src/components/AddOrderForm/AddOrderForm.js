import React, { useState } from "react";
import { AddOrderFormWrapper, AddOrderFormForm } from "./AddOrderFormStyles";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { connect } from "react-redux";
import { addNewOrderAction } from "../../actions/actions";

import TextField from "@material-ui/core/TextField";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddOrderForm = ({ addNewOrder }) => {
  const classes = useStyles();

  const [orderDate, setOrderDate] = useState(new Date());
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [priority, setPriority] = useState("");
  const [currency, setCurrency] = useState("");

  const handleCurrencyChange = e => {
    setCurrency(e.target.value);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleOrderDateChange = date => {
    setOrderDate(date);
  };

  const handleDeliveryDateChange = date => {
    setDeliveryDate(date);
  };

  const handleAddOrderForm = e => {
    e.preventDefault();

    const clientName = e.target.clientName.value;
    const payment = e.target.payment.value;
    const formatedOrderDate = moment(orderDate).format("DD/MM/yyyy");
    const formatedDeliveryDate = moment(deliveryDate).format("DD/MM/yyyy");

    const newOrder = {
      orderID: uuidv4(),
      clientName,
      payment,
      orderDate: formatedOrderDate,
      deliveryDate: formatedDeliveryDate,
      priority,
      currency,
      products: []
    };
    addNewOrder(newOrder);

    e.target.reset();
    setOrderDate(new Date());
    setDeliveryDate(new Date());
  };

  return (
    <AddOrderFormWrapper>
      <AddOrderFormForm onSubmit={handleAddOrderForm}>
        <TextField
          name="clientName"
          id="outlined-basic"
          label="Client name"
          variant="outlined"
        />
        <TextField
          name="payment"
          id="outlined-basic"
          label="Payment"
          variant="outlined"
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Order date"
              format="dd/MM/yyyy"
              value={orderDate}
              onChange={handleOrderDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>

          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Delivery date"
              format="dd/MM/yyyy"
              value={deliveryDate}
              onChange={handleDeliveryDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Priority</InputLabel>
          <Select
            value={priority}
            onChange={handlePriorityChange}
            label="Priority"
          >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Currency</FormLabel>
          <RadioGroup
            aria-label="currency"
            name="currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
            <FormControlLabel value="USD" control={<Radio />} label="USD" />
            <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="outlined">
          Add Order
        </Button>
      </AddOrderFormForm>
    </AddOrderFormWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewOrder: newOrder => dispatch(addNewOrderAction(newOrder))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddOrderForm);
