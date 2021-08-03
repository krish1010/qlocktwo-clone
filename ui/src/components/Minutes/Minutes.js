import "./Minutes.css";

function Minutes({ lights }) {
  return (
    <h2>
      {lights.map((light, idx) => (
        <span key={idx} className={light ? "on" : "off"}>
          I
        </span>
      ))}
    </h2>
  );
}

export default Minutes;
