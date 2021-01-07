import TemaContext from "./context/TemaContext";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  const themeHook = useState("light");
  return (
    <TemaContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </TemaContext.Provider>
  );
}
export default App;
