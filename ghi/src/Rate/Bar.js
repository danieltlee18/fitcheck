import "./Rate.css"
import { useState } from "react"

const Bar = () => {
        const [oneClicked, setStyleOneClicked] = useState(false);
        const [twoClicked, setStyleTwoClicked] = useState(false);
        const [threeClicked, setStyleThreeClicked] = useState(false);
        const [fourClicked, setStyleFourClicked] = useState(false);
        const [fiveClicked, setStyleFiveClicked] = useState(false);

    return (
      <>
        <div className="rating-bar">
          <div className="score">
            <button
              onClick={() => {
                setOneClicked(true);
                setTwoClicked(false);
                setThreeClicked(false);
                setFourClicked(false);
                setFiveClicked(false);
              }}
              className={
                OneClicked
                  ? "style-score-button style-clicked"
                  : "style-score-button"
              }
            >
              1
            </button>
          </div>
          <div className="score">
            <button
              onClick={() => {
                setOneClicked(true);
                setTwoClicked(true);
                setThreeClicked(false);
                setFourClicked(false);
                setFiveClicked(false);
              }}
              className={
                TwoClicked
                  ? "style-score-button style-clicked"
                  : "style-score-button"
              }
            >
              2
            </button>
          </div>
          <div className="score">
            <button
              onClick={() => {
                setOneClicked(true);
                setTwoClicked(true);
                setThreeClicked(true);
                setFourClicked(false);
                setFiveClicked(false);
              }}
              className={
                ThreeClicked
                  ? "style-score-button style-clicked"
                  : "style-score-button"
              }
            >
              3
            </button>
          </div>
          <div className="score">
            <button
              onClick={() => {
                setOneClicked(true);
                setTwoClicked(true);
                setThreeClicked(true);
                setFourClicked(true);
                setFiveClicked(false);
              }}
              className={
                FourClicked
                  ? "style-score-button style-clicked"
                  : "style-score-button"
              }
            >
              4
            </button>
          </div>
          <div className="score">
            <button
              onClick={() => {
                setOneClicked(true);
                setTwoClicked(true);
                setThreeClicked(true);
                setFourClicked(true);
                setFiveClicked(true);
              }}
              className={
                FiveClicked
                  ? "style-score-button style-clicked"
                  : "style-score-button"
              }
            >
              5
            </button>
          </div>
        </div>
      </>
    );
}
export default Bar
