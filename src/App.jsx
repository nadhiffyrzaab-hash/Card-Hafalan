import { useState } from "react";
import "./App.css";

function App() {
  const [hafalan, setHafalan] = useState(0);

  const tambah = () => {
    setHafalan(hafalan + 1);
  };

  const kurang = () => {
    if (hafalan > 0) {
      setHafalan(hafalan - 1);
    }
  };

  const reset = () => {
    setHafalan(0);
  };

  const progress = hafalan > 0 ? (hafalan % 10) * 10 : 0; // Example progress based on hafalan

  return (
    <div className="app-background">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <span className="icon">📖</span>
            <h1>Penghitung Hafalan</h1>
          </div>

          <div className="hafalan-display">
            <p className="hafalan-number">{hafalan}</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="message">
              {hafalan === 0
                ? "Semangat menghafal!"
                : "MasyaAllah, terus lanjutkan!"}
            </p>
          </div>

          <div className="buttons">
            <button onClick={kurang} className="button minus">-</button>
            <button onClick={reset} className="button reset">Reset</button>
            <button onClick={tambah} className="button plus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;