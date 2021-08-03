import "./Minutes.css";

function Minutes({ lights }) {
  return (
    <div>
      <h2>
        <span className={lights[0] ? "on" : "off"}>I</span>
        <span className={lights[1] ? "on" : "off"}>I</span>
        <span className={lights[2] ? "on" : "off"}>I</span>
        <span className={lights[3] ? "on" : "off"}>I</span>
      </h2>
    </div>
  );
}

export default Minutes;
