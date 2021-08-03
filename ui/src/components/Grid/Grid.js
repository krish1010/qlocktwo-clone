import "./Grid.css";
import Data from "../Data/Data";

function Grid({ allElements, spell }) {
  const currentTime = spell;
  return (
    <table className="center">
      {allElements.map((row, index) => (
        <tbody key={index}>
          <tr key={index}>
            {row.map((ele, idx) => (
              <Data
                key={idx}
                data={Object.keys(ele)[0]}
                className={
                  currentTime.includes(ele[Object.keys(ele)[0]])
                    ? "light"
                    : "dark"
                }
                id={ele[Object.keys(ele)[0]]}
              />
            ))}
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Grid;
