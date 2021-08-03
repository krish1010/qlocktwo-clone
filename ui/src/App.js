import "./App.css";
import Grid from "./components/Grid/Grid";
import Button from "./components/Button/Button";
import Minutes from "./components/Minutes/Minutes";
import { useEffect, useState } from "react";
function App() {
  const [spell, setSpell] = useState(0);
  const [table, setTable] = useState(false);
  const [lights, setLights] = useState([0, 0, 0, 0]);

  const spellTime = async () => {
    const response = await fetch("http://localhost:5000/spell");
    const data = await response.json();
    setSpell(data.spell);
    setTable(data.data.grid);
    setLights(data.lights);
  };

  useEffect(() => {
    const getTable = async () => {
      await spellTime();
    };
    getTable();
  }, []);

  const onClick = async () => {
    setTable(false);
    await spellTime();
  };

  return (
    <div className="center">
      <h3>May the Force be with You.</h3>
      {table && <Grid allElements={table} spell={spell} />}
      <Minutes lights={lights} />
      <Button onClick={onClick} />
    </div>
  );
}

export default App;
