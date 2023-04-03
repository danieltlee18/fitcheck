import './Rate.css'
import {useState} from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from "../Footer/Footer.js";
import samplePic from '../images/sampleRate.jpeg'

const Rate = () => {
    const [styleOneClicked, setStyleOneClicked] = useState(false)
    const [styleTwoClicked, setStyleTwoClicked] = useState(false);
    const [styleThreeClicked, setStyleThreeClicked] = useState(false);
    const [styleFourClicked, setStyleFourClicked] = useState(false);
    const [styleFiveClicked, setStyleFiveClicked] = useState(false);

    const [creativityOneClicked, setCreativityOneClicked] = useState(false);
    const [creativityTwoClicked, setCreativityTwoClicked] = useState(false);
    const [creativityThreeClicked, setCreativityThreeClicked] = useState(false);
    const [creativityFourClicked, setCreativityFourClicked] = useState(false);
    const [creativityFiveClicked, setCreativityFiveClicked] = useState(false);

    const [suitabilityOneClicked, setSuitabilityOneClicked] = useState(false);
    const [suitabilityTwoClicked, setSuitabilityTwoClicked] = useState(false);
    const [suitabilityThreeClicked, setSuitabilityThreeClicked] = useState(false);
    const [suitabilityFourClicked, setSuitabilityFourClicked] = useState(false);
    const [suitabilityFiveClicked, setSuitabilityFiveClicked] = useState(false);

    console.log(styleOneClicked, styleTwoClicked, styleThreeClicked);
    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <section className="rate-wrapper">
          <div className="center-piece-frame">
            <div className="center-piece">
              <div className="outfit">
                <img src={samplePic} alt="sample" />
              </div>
              <div className="aspects">
                <div className="aspect">Style</div>
                <div className="rating-bar">
                  <div className="score">
                    <button
                      onClick={() => {
                        setStyleOneClicked(true);
                        setStyleTwoClicked(false);
                        setStyleThreeClicked(false);
                        setStyleFourClicked(false);
                        setStyleFiveClicked(false);
                      }}
                      className={
                        styleOneClicked
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
                        setStyleOneClicked(true);
                        setStyleTwoClicked(true);
                        setStyleThreeClicked(false);
                        setStyleFourClicked(false);
                        setStyleFiveClicked(false);
                      }}
                      className={
                        styleTwoClicked
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
                        setStyleOneClicked(true);
                        setStyleTwoClicked(true);
                        setStyleThreeClicked(true);
                        setStyleFourClicked(false);
                        setStyleFiveClicked(false);
                      }}
                      className={
                        styleThreeClicked
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
                        setStyleOneClicked(true);
                        setStyleTwoClicked(true);
                        setStyleThreeClicked(true);
                        setStyleFourClicked(true);
                        setStyleFiveClicked(false);
                      }}
                      className={
                        styleFourClicked
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
                        setStyleOneClicked(true);
                        setStyleTwoClicked(true);
                        setStyleThreeClicked(true);
                        setStyleFourClicked(true);
                        setStyleFiveClicked(true);
                      }}
                      className={
                        styleFiveClicked
                          ? "style-score-button style-clicked"
                          : "style-score-button"
                      }
                    >
                      5
                    </button>
                  </div>
                </div>

                <div className="aspect">Creativity</div>
                <div className="rating-bar">
                  <div className="score">
                    <button
                      onClick={() => {
                        setCreativityOneClicked(true);
                        setCreativityTwoClicked(false);
                        setCreativityThreeClicked(false);
                        setCreativityFourClicked(false);
                        setCreativityFiveClicked(false);
                      }}
                      className={
                        creativityOneClicked
                          ? "creativity-score-button creativity-clicked"
                          : "creativity-score-button"
                      }
                    >
                      1
                    </button>
                  </div>
                  <div className="score">
                    <button
                      onClick={() => {
                        setCreativityOneClicked(true);
                        setCreativityTwoClicked(true);
                        setCreativityThreeClicked(false);
                        setCreativityFourClicked(false);
                        setCreativityFiveClicked(false);
                      }}
                      className={
                        creativityTwoClicked
                          ? "creativity-score-button creativity-clicked"
                          : "creativity-score-button"
                      }
                    >
                      2
                    </button>
                  </div>
                  <div className="score">
                    <button
                      onClick={() => {
                        setCreativityOneClicked(true);
                        setCreativityTwoClicked(true);
                        setCreativityThreeClicked(true);
                        setCreativityFourClicked(false);
                        setCreativityFiveClicked(false);
                      }}
                      className={
                        creativityThreeClicked
                          ? "creativity-score-button creativity-clicked"
                          : "creativity-score-button"
                      }
                    >
                      3
                    </button>
                  </div>
                  <div className="score">
                    <button
                      onClick={() => {
                        setCreativityOneClicked(true);
                        setCreativityTwoClicked(true);
                        setCreativityThreeClicked(true);
                        setCreativityFourClicked(true);
                        setCreativityFiveClicked(false);
                      }}
                      className={
                        creativityFourClicked
                          ? "creativity-score-button creativity-clicked"
                          : "creativity-score-button"
                      }
                    >
                      4
                    </button>
                  </div>
                  <div className="score">
                    <button
                      onClick={() => {
                        setCreativityOneClicked(true);
                        setCreativityTwoClicked(true);
                        setCreativityThreeClicked(true);
                        setCreativityFourClicked(true);
                        setCreativityFiveClicked(true);
                      }}
                      className={
                        creativityFiveClicked
                          ? "creativity-score-button creativity-clicked"
                          : "creativity-score-button"
                      }
                    >
                      5
                    </button>
                  </div>
                </div>

                <div className="aspect">Suitability</div>
                    <div className="rating-bar">
                    <div className="score">
                        <button
                        onClick={() => {
                            setSuitabilityOneClicked(true);
                            setSuitabilityTwoClicked(false);
                            setSuitabilityThreeClicked(false);
                            setSuitabilityFourClicked(false);
                            setSuitabilityFiveClicked(false);
                        }}
                        className={
                            suitabilityOneClicked
                            ? "suitability-score-button suitability-clicked"
                            : "suitability-score-button"
                        }
                        >
                        1
                        </button>
                    </div>
                    <div className="score">
                        <button
                        onClick={() => {
                            setSuitabilityOneClicked(true);
                            setSuitabilityTwoClicked(true);
                            setSuitabilityThreeClicked(false);
                            setSuitabilityFourClicked(false);
                            setSuitabilityFiveClicked(false);
                        }}
                        className={
                            suitabilityTwoClicked
                            ? "suitability-score-button suitability-clicked"
                            : "suitability-score-button"
                        }
                        >
                        2
                        </button>
                    </div>
                    <div className="score">
                        <button
                        onClick={() => {
                            setSuitabilityOneClicked(true);
                            setSuitabilityTwoClicked(true);
                            setSuitabilityThreeClicked(true);
                            setSuitabilityFourClicked(false);
                            setSuitabilityFiveClicked(false);
                        }}
                        className={
                            suitabilityThreeClicked
                            ? "suitability-score-button suitability-clicked"
                            : "suitability-score-button"
                        }
                        >
                        3
                        </button>
                    </div>
                    <div className="score">
                        <button
                        onClick={() => {
                            setSuitabilityOneClicked(true);
                            setSuitabilityTwoClicked(true);
                            setSuitabilityThreeClicked(true);
                            setSuitabilityFourClicked(true);
                            setSuitabilityFiveClicked(false);
                        }}
                        className={
                            suitabilityFourClicked
                            ? "suitability-score-button suitability-clicked"
                            : "suitability-score-button"
                        }
                        >
                        4
                        </button>
                    </div>
                    <div className="score">
                        <button
                        onClick={() => {
                            setSuitabilityOneClicked(true);
                            setSuitabilityTwoClicked(true);
                            setSuitabilityThreeClicked(true);
                            setSuitabilityFourClicked(true);
                            setSuitabilityFiveClicked(true);
                        }}
                        className={
                            suitabilityFiveClicked
                            ? "suitability-score-button suitability-clicked"
                            : "suitability-score-button"
                        }
                        >
                        5
                        </button>
                    </div>
                </div>

                <button className="submit-rating">Submit</button>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
}
export default Rate
