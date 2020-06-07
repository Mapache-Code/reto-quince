import React from "react";
import "./App.css";

import { Header, Main, Footer } from "./components/index";

function App() {
  return (
    <React.Fragment>
      <div className="background"></div>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
