import React, { useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false); // State for emoji visibility

  const fetchDog = async () => {
    setLoading(true);
    setShowEmoji(true); // Show the emoji when the button is clicked
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Random Pup Generator</h1>
      <button onClick={fetchDog} disabled={loading}>
        {loading ? "Loading..." : "Generate 🐶"}
      </button>
      <div className="content">
        {data.message ? (
          <div className="card">
            <img src={data.message} alt="Random Dog" />
          </div>
        ) : (
          <p>Click the 🐶 for a cute pup!</p>
        )}
      </div>
      {showEmoji && <div className="emoji">😍</div>}{" "}
      {/* Display emoji if true */}
    </div>
  );
}

export default App;
