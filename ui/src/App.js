import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
function App() {
  const [spell, setSpell] = useState(0);
  const [table, setTable] = useState(false);

  const spellTime = async () => {
    const response = await fetch("http://localhost:5000/spell");
    const data = await response.json();
    setSpell(data.time);
    return data.data.grid;
  };

  useEffect(() => {
    const getTable = async () => {
      const tableFromServer = await spellTime();
      setTable(tableFromServer);
    };
    getTable();
  }, []);

  const onClick = async () => {
    setTable(false);
    const tableFromServer = await spellTime();
    setTable(tableFromServer);
  };

  return (
    <div className="center">
      <h3>May the Force be with You.</h3>
      {table && <Grid allElements={table} spell={spell} />}
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
