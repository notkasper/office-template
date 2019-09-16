/*===========================NODE MODULES======================*/
import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import { initializeIcons } from "@uifabric/icons";

/*===========================STORES============================*/
import addonStore from "./stores/addon";
import exampleFormStore from "./stores/exampleForm";

/*===========================DIALOGS===========================*/
import Form1 from "./exampleDialog";

/*===========================ADDON COMPONENTS==================*/
import TestComponent from "./addonComponents/TestComponent";

initializeIcons();

const stores = {
  addonStore,
  exampleFormStore
};

const App = class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Route exact path="/home" component={TestComponent} />
          <Route exact path="/form1" component={Form1} />
        </BrowserRouter>
      </Provider>
    );
  }
};

export default hot(App);
