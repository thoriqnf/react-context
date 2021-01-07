import { useContext } from "react";
import TemaContext from "../context/TemaContext";

const TemaChanger = () => {
  const [temaMode, setTemaMode] = useContext(TemaContext);
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        setTemaMode(temaMode === "light" ? "dark" : "light");
      }}
    >
      <span title="switch tema">
        {temaMode === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default TemaChanger;
