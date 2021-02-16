import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal as MaterialModal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddProductToOrderForm from "../AddProductToOrderForm/AddProductToOrderForm";
import ProductOrderList from "../ProductsOrderList/ProductsOrderList";
import { modalTypes } from "../../utiles/modalTypes";
import EditOrderForm from "../../EditOrderForm/EditOrderForm";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Modal = ({ modalOpen, handleModalClose, modalType }) => {
  const classes = useStyles();

  return (
    <div>
      <MaterialModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            {modalType === modalTypes.addProduct ? (
              <AddProductToOrderForm />
            ) : modalType === modalTypes.displayProducts ? (
              <ProductOrderList />
            ) : (
              <EditOrderForm />
            )}
          </div>
        </Fade>
      </MaterialModal>
    </div>
  );
};
// yellow, blue ,red, green
// const color = "green";

// color === "red"
//   ? console.log("jest czerwony")
//   : color === "blue"
//   ? console.log("jest niebieski")
//   : color === "yellow"
//   ? console.log("jest źółty")
//   : console.log("jest zielony");

export default Modal;
