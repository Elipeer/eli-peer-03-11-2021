import "./assets/css/layout.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./store/store";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import WeatherSearchCont from "./components/weatherSearchCont";
import NavBar from "./layout/navBar";
import FavoritesCont from "./components/favoritesCont";
import InterceptorsComponent from "./services/interceptorsComponent";
import ContentLoader from "./wigdets/ContentLoader";

function App() {
  let persistor = persistStore(store);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<ContentLoader />} persistor={persistor}>
          <BrowserRouter>
            <InterceptorsComponent />
            <NavBar />
            <Switch>
              <Route path="/favorites" component={FavoritesCont} />
              <Route path="/" component={WeatherSearchCont} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
