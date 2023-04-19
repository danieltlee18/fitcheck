import "./UserOutfits.css";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCreateOutfitMutation } from "../services/outfit";
import { useListOutfitQuery } from "../services/outfit"
import { useGetAccountQuery } from "../services/auth";
import {
  handleImgUrlChange,
  handleStyleChange,
  handleOccasionChange,
  reset,
  error,
} from "../features/outfits/outfitsSlice";

const UserOutfits = () => {
  const dispatch = useDispatch()
  const { data: outfits, isLoading } = useListOutfitQuery()
  const { data: user, isLoading: isUserLoading } = useGetAccountQuery()
  console.log(user)


  if (isLoading || isUserLoading){
    return <div>loading your data</div>
  }

  const subCategories = (outfit) => {
    if (outfit.style == "Casual") {
        const cat1 = "Fit";
        const cat2 = "Approachability";
        const cat3 = "Style";
        return [cat1, cat2, cat3]
    } else if (outfit.style == "Formal") {
        const cat1 = "Fit";
        const cat2 = "Detailing";
        const cat3 = "Command";
        return [cat1, cat2, cat3];
    } else if (outfit.style == "Sexy") {
        const cat1 = "Fit";
        const cat2 = "Flattering";
        const cat3 = "Eye-Catching";
        return [cat1, cat2, cat3];
    }
  }

  const averageRatings = (outfit) => {
    if (outfit.ratings.length == 0){
      return [0, 0, 0]
    }
    let first = 0
    let second = 0
    let third = 0
    for( let rating of outfit.ratings){
      first += rating.category_1;
      second += rating.category_2;
      third += rating.category_3;
    }
    return [
        first / outfit.ratings.length,
        second / outfit.ratings.length,
        third / outfit.ratings.length,
    ];
  }

  return (
      <>
          <div className="navbar">
              <Navbar />
          </div>
          <section className="rate-wrapper">
              <div className="center-piece-frame">
                  <div className="outfit-center-piece">
                      {
                      outfits.filter((outfit) => outfit.account_id == user.id ).map((outfit)=>{
                        console.log(outfit)

                        return (

                            <div key={outfit.id} className="outfit-summary">
                                <div className="img-box">
                                    <img src={outfit.img_url} />
                                </div>
                                <div className="ratings">
                                    <div className="rating">
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
                                    <div className="rating">
                                        <p>{subCategories(outfit)[1]}</p>
                                        <div
                                            className="percentage2"
                                            style={{
                                                width: `${
                                                    20 *averageRatings(outfit)[1]
                                                }%`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="rating">
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
                                </div>
                            </div>
                        );})}
                  </div>
              </div>
          </section>
          <div className="footer">
              <Footer />
          </div>
      </>
  );
};
export default UserOutfits;
