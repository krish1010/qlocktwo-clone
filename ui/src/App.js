import './App.css';
import Grid from './components/Grid/Grid';
import { useEffect, useState } from 'react';
function App() {
  const [spell, setSpell] = useState(0)
  const [table, setTable] = useState()

  const spellTime = async () => {
    const response = await fetch("http://localhost:5000/spell");
    const data = await response.json();
    setSpell(data.time)
    console.log(data.time)
    return data.data.grid;

  };

  useEffect(() => {
    const getTable = async () => {
      const tableFromServer = await spellTime();
      setTable(tableFromServer);
    };
    getTable();
  }, []);

  return (
    <div className="App">
      <h3>May the Force be with You.</h3>
      {table && <Grid allElements={table} spell={spell} />}
    </div>
  );
}

export default App;
