import './Rate.css'
import {useState} from 'react'
import Navbar from '../NavBar/Navbar.js'
import Footer from "../Footer/Footer.js"
import samplePic from '../images/sampleRate.jpeg'
import { useListOutfitQuery } from "../services/outfit"
import { useDispatch, useSelector } from 'react-redux'
import { useCreateRatingMutation } from '../services/rating'
import { useGetAccountQuery } from '../services/auth'

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

    const { data: outfits, isLoading } = useListOutfitQuery();
    const [createRating] = useCreateRatingMutation();
    const { data: user, isLoading: isUserLoading } = useGetAccountQuery();


    const getCategoryRatings = () => {
      const cat1 = [
        styleOneClicked,
        styleTwoClicked,
        styleThreeClicked,
        styleFourClicked,
        styleFiveClicked];
      const cat2 = [
        creativityOneClicked,
        creativityTwoClicked,
        creativityThreeClicked,
        creativityFourClicked,
        creativityFiveClicked,
      ];
      const cat3 = [
        suitabilityOneClicked,
        suitabilityTwoClicked,
        suitabilityThreeClicked,
        suitabilityFourClicked,
        suitabilityFiveClicked,
      ];
      let cat1Rating = 0;
      for (const rating of cat1) {
        if (rating) {
          cat1Rating++;
        }
      }
      let cat2Rating = 0;
      for (const rating of cat2) {
        if (rating) {
          cat2Rating++;
        }
      }
      let cat3Rating = 0;
      for (const rating of cat3) {
        if (rating) {
          cat3Rating++;
        }
      }
      return [cat1Rating, cat2Rating, cat3Rating];
    }

    const handleCreateRating = async (outfitId) => {
      const [rating1, rating2, rating3] = getCategoryRatings();
      const result = await createRating({
        "outfit_id": outfitId,
        rating: {category_1: rating1, category_2: rating2, category_3: rating3},
      })
      window.location.reload();
    }

    const filterRatedOutfits = (outfit) => {
      for (const rating of outfit.ratings) {
        if (rating.account_id === user.id) {
          return false;
        }
      }
      return true;
    }

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

                        <button
                          onClick={() => handleCreateRating(outfit.id)}
                          className="submit-rating"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  ))
                  .slice(0, 1)
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
