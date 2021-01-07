import { useContext } from "react";
import TemaContext from "../context/TemaContext";
import WarnaTema from "../Warna";

const Main = () => {
  const theme = useContext(TemaContext)[0];
  const currentTema = WarnaTema[theme];
  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTema.backgroundColor}`,
        color: `${currentTema.textColor}`,
      }}
    >
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>
      <button> This is a button</button>
    </main>
  );
};

export default Main;
