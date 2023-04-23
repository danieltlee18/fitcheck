import "./UserOutfits.css";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import { useDispatch } from "react-redux";
import { useListOutfitQuery } from "../services/outfit";
import { useGetAccountQuery } from "../services/auth";
import {
    handleImgUrlChange,
    handleStyleChange,
    handleOccasionChange,
    reset,
    error,
} from "../features/outfits/outfitsSlice";
import { subCategories, averageRatings } from "./styleUtilities";
const UserOutfits = () => {
    const dispatch = useDispatch();
    const { data: outfits, isLoading } = useListOutfitQuery();
    const { data: user, isLoading: isUserLoading } = useGetAccountQuery();
    console.log(user);

    if (isLoading || isUserLoading) {
        return <div>loading your data</div>;
    }


    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <section className="my-outfits-wrapper">
          <div className="my-outfits-center-piece-frame">
            <div className="my-outfits-center-piece">
              <div className="my-outfits">
                {outfits
                  .filter((outfit) => outfit.account_id == user.id)
                  .map((outfit) => {
                    console.log(outfit);

                    return (
                      <div key={outfit.id} className="my-outfit-summary">
                        <div className="img-box">
                          <img src={outfit.img_url} />
                        </div>
                        <div className="ratings">
                          <div className="rating">
                            <p>{subCategories(outfit)[0]}</p>
                            <div
                              className="percentage"
                              style={{
                                width: `${20 * averageRatings(outfit)[0]}%`,
                              }}
                            ></div>
                          </div>
                          <div className="rating">
                            <p>{subCategories(outfit)[1]}</p>
                            <div
                              className="percentage2"
                              style={{
                                width: `${20 * averageRatings(outfit)[1]}%`,
                              }}
                            ></div>
                          </div>
                          <div className="rating">
                            <p>{subCategories(outfit)[2]}</p>
                            <div
                              className="percentage3"
                              style={{
                                width: `${20 * averageRatings(outfit)[2]}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
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
