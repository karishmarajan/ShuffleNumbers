import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ShuffleFunction = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleShuffle = () => {
    setNumbers([...numbers].sort(() => 0.5 - Math.random()));
  };
  const handleSort = () => {
    setNumbers([...numbers].sort());
  };

  return (
    <div className="container">
      <Header />
      <div className="main-view">
        <div className="flex-container">
          {numbers.map((n) => (
            <div
              key={n}
              data-testid="arr-test"
              className={n % 2 === 0 ? "even-cell" : "odd-cell"}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
      <div className="btn-div">
        <button
          data-testid="shuffle-test"
          className="btn-view"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
        <button
          data-testid="sort-test"
          className="btn-view"
          onClick={handleSort}
        >
          Sort
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ShuffleFunction;
