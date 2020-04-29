import React from 'react';
import './App.scss';
import clientRouter from "./router"
import {
  BrowserRouter, Switch, Route
} from "react-router-dom"
import ClientTemplate from "./_template/clientTemplate"
import PNF from './_page/_pageNotFound';
const clientLayout = router => {
  if (router && router.length > 0) {
    return router.map((item, index) => {
      return <ClientTemplate
        key={index}
        Component={item.component}
        exact={item.exact}
        path={item.path}
      />
    })
  }
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {clientLayout(clientRouter)}
          <Route path="" component={PNF} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
