import './Rate.css'
import {useState, useEffect} from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from "../Footer/Footer.js"
import samplePic from '../images/sampleRate.jpeg'
import { useListOutfitQuery } from "../services/outfit"
import { useCreateRatingMutation } from '../services/rating'
import { useGetAccountQuery } from '../services/auth'

const Rate = () => {
    // const [styleOneClicked, setStyleOneClicked] = useState(false)
    // const [styleTwoClicked, setStyleTwoClicked] = useState(false);
    // const [styleThreeClicked, setStyleThreeClicked] = useState(false);
    // const [styleFourClicked, setStyleFourClicked] = useState(false);
    // const [styleFiveClicked, setStyleFiveClicked] = useState(false);

    // const [creativityOneClicked, setCreativityOneClicked] = useState(false);
    // const [creativityTwoClicked, setCreativityTwoClicked] = useState(false);
    // const [creativityThreeClicked, setCreativityThreeClicked] = useState(false);
    // const [creativityFourClicked, setCreativityFourClicked] = useState(false);
    // const [creativityFiveClicked, setCreativityFiveClicked] = useState(false);

    // const [suitabilityOneClicked, setSuitabilityOneClicked] = useState(false);
    // const [suitabilityTwoClicked, setSuitabilityTwoClicked] = useState(false);
    // const [suitabilityThreeClicked, setSuitabilityThreeClicked] = useState(false);
    // const [suitabilityFourClicked, setSuitabilityFourClicked] = useState(false);
    // const [suitabilityFiveClicked, setSuitabilityFiveClicked] = useState(false);

    const [buttonBar1, setButtonBar1] = useState()
    const [buttonBar2, setButtonBar2] = useState()
    const [buttonBar3, setButtonBar3] = useState()


    const { data: outfits, isLoading } = useListOutfitQuery();
    const [createRating] = useCreateRatingMutation();
    const { data: user, isLoading: isUserLoading } = useGetAccountQuery();
    const [s, setS] = useState(0)


    const getCategoryRatings = () => {
      return [buttonBar1, buttonBar2, buttonBar3];
    }

    const handleCreateRating = async (outfitId) => {
      const [rating1, rating2, rating3] = getCategoryRatings();
      const result = await createRating({
        "outfit_id": outfitId,
        rating: {category_1: rating1, category_2: rating2, category_3: rating3},
      })
      setS(s+1)
      setButtonBar1()
      setButtonBar2()
      setButtonBar3()
    }


    const filterRatedOutfits = (outfit) => {
      if (outfit.account_id === user.id){
        return false
      }
      for (const rating of outfit.ratings) {
        if (rating.account_id === user.id) {
          return false;
        }
      }
      return true;
    }
    useEffect(() => {

    }, [s])

    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <section className="rate-wrapper">
          <div className="center-piece-frame">
            {!isLoading && !isUserLoading
              ? outfits
                  .filter((rating) => filterRatedOutfits(rating))
                  .map((outfit) => (
                    <div key={outfit.id} className="center-piece">
                      <div className="outfit">
                        <img src={outfit.img_url} alt="sample" />
                        <h1>{outfit.style}</h1>
                      </div>
                      <div className="aspects">
                        <div className="aspect">Style</div>
                        <div className="rating-bar">
                          <div className="score">
                            <button
                              onClick={() => {
                                setButtonBar1(1);
                              }}
                              className={
                                buttonBar1 >= 1
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
                                setButtonBar1(2);
                              }}
                              className={
                                buttonBar1 >= 2
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
                                setButtonBar1(3);
                              }}
                              className={
                                buttonBar1 >= 3
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
                                setButtonBar1(4);
                              }}
                              className={
                                buttonBar1 >= 4
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
                                setButtonBar1(5);
                              }}
                              className={
                                buttonBar1 >= 5
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
                                setButtonBar2(1)
                              }}
                              className={
                                buttonBar2 >= 1
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
                               setButtonBar2(2)
                              }}
                              className={
                                buttonBar2 >= 2
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
                                setButtonBar2(3)
                              }}
                              className={
                                buttonBar2 >= 3
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
                                setButtonBar2(4)
                              }}
                              className={
                                buttonBar2 >= 4
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
                                setButtonBar2(5)
                              }}
                              className={
                                buttonBar2 >= 5
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
                                setButtonBar3(1)
                              }}
                              className={
                                buttonBar3 >= 1
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
                                setButtonBar3(2)
                              }}
                              className={
                                buttonBar3 >= 2
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
                                setButtonBar3(3)
                              }}
                              className={
                                buttonBar3 >= 3
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
                                setButtonBar3(4)
                              }}
                              className={
                                buttonBar3 >= 4
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
                                setButtonBar3(5)
                              }}
                              className={
                                buttonBar3 >= 5
                                  ? "suitability-score-button suitability-clicked"
                                  : "suitability-score-button"
                              }
                            >
                              5
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => handleCreateRating(outfit.id)}
                          className="submit-rating"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ))
                  .slice(s, s + 1)
              : ""}
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
}


export default Rate
