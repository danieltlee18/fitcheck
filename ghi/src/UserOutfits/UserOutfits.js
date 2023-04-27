import "./UserOutfits.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import { useDispatch } from "react-redux";
import { useListOutfitQuery, useDeleteOutfitMutation } from "../services/outfit";
import { useGetAccountQuery } from "../services/auth";
import { subCategories, averageRatings } from "./styleUtilities";

const UserOutfits = () => {
  const dispatch = useDispatch();
  let { data: outfits, isLoading } = useListOutfitQuery();
  const { data: user, isLoading: isUserLoading } = useGetAccountQuery();
  const [deleteOutfit] = useDeleteOutfitMutation();
  const [outfitList, setOutfitList] = useState([])

    const handleDelete = (outfitId) => {
        const result = deleteOutfit({
            "outfit_id": outfitId,

        })}


  if (isLoading || isUserLoading || !user) {
    return <div>loading your data</div>;
  } else {
    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <section className="my-outfits-wrapper">
          <div className="my-outfits-center-piece-frame">
            <div className="my-outfits-center-piece">
              <div className="my-outfits">
                {outfits.filter((outfit) => outfit.account_id == user.id)
                  .length > 0 ? (
                  outfits
                    .filter((outfit) => outfit.account_id == user.id)
                    .map((outfit) => {
                      console.log(outfit);

                      return (
                        <div key={outfit.id} className="my-outfit-summary">
                          <div className="img-box">
                            <img src={outfit.img_url} />
                          </div>
                          <div className="ratings-with-desc">
                            <h3>
                              {outfit.style} | {outfit.occasion.slice(0, 38)}
                            </h3>
                            <div className="delete-outfit" onClick={() => handleDelete(outfit.id)}>
                              delete
                            </div>
                            <div className="ratings">
                              <div className="bar-with-rating">
                                <div className="my-rating">
                                  <p>{subCategories(outfit)[0]}</p>

                                  <div
                                    className="percentage"
                                    style={{
                                      width: `${
                                        20 * averageRatings(outfit)[0]
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <p className="out-of-five">
                                  {Math.round(averageRatings(outfit)[0] * 10) /
                                    10}
                                  /5
                                </p>
                              </div>

                              <div className="bar-with-rating">
                                <div className="my-rating">
                                  <p>{subCategories(outfit)[1]}</p>
                                  <div
                                    className="percentage2"
                                    style={{
                                      width: `${
                                        20 * averageRatings(outfit)[1]
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <p className="out-of-five">
                                  {Math.round(averageRatings(outfit)[1] * 10) /
                                    10}
                                  /5
                                </p>
                              </div>
                              <div className="bar-with-rating">
                                <div className="my-rating">
                                  <p>{subCategories(outfit)[2]}</p>
                                  <div
                                    className="percentage3"
                                    style={{
                                      width: `${
                                        20 * averageRatings(outfit)[2]
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <p className="out-of-five">
                                  {Math.round(averageRatings(outfit)[1] * 10) /
                                    10}
                                  /5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div className="no-fits">
                    <Link to="/createoutfit">
                      <h1>
                        UPLOAD AN OUTFIT <br /> TO SEE IT HERE!
                      </h1>
                    </Link>
                  </div>
                )}
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
};
export default UserOutfits;
