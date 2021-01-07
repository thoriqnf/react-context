import React from "react";
import TemaChanger from "./TemaChanger";

const Header = () => {
  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Context API</h1>
      </div>
      <div>
        <TemaChanger />
      </div>
    </header>
  );
};

export default Header;
