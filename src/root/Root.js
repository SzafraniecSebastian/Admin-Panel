import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes/routes";
import AddOrderView from "../views/AddOrderView";
import OrdersView from "../views/OrdersView";
import MainTemplate from "../templates/MainTemplate";

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.addOrder} component={AddOrderView} />
          <Route exact path={routes.order} component={OrdersView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
