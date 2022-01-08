import useTimer from "./hooks/useTimer";
import "./styles.css";

export default function App() {
  const [value, startTimer, pauseTimer, resetTimer] = useTimer({
    initialValue: 20
  });
  return (
    <div className="App">
      <div
        style={{
          width: "500px",
          height: "230px",
          margin: "20px auto",
          border: "1px solid lightgrey",
          borderRadius: "10px"
        }}
      >
        <p style={{ fontSize: "15px", color: "#1a73e8" }}>Timer</p>
        <div
          style={{
            borderTop: "1px solid lightgrey",
            borderBottom: "1px solid lightgrey"
          }}
        >
          <h1 style={{ fontSize: "44px" }}>{value}s</h1>
        </div>
        <button
          style={{
            margin: "20px",
            height: "30px",
            width: "60px",
            background: "#1a73e8",
            color: "white",
            border: "0"
          }}
          onClick={startTimer}
        >
          Start
        </button>
        <button
          style={{
            margin: "20px",
            height: "30px",
            width: "60px",
            background: "white",
            color: "#1a73e8",
            border: "1px solid lightGrey"
          }}
          onClick={pauseTimer}
        >
          Pause
        </button>
        <button
          style={{
            margin: "20px",
            height: "30px",
            width: "60px",
            background: "white",
            color: "#1a73e8",
            border: "1px solid lightGrey"
          }}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
