import "./CreateOutfit.css";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import pHBG from "./images/low-poly-grid-haikei.png";
import phP from "./images/silhouette-fitcheck.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useCreateOutfitMutation } from "../services/outfit";
import {
  handleImgUrlChange,
  handleStyleChange,
  handleOccasionChange,
} from "../features/outfits/outfitsSlice";

const CreateOutfit = () => {
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.outfit);
  const [createOutfit] = useCreateOutfitMutation();

  const handleSubmit = async (e) => {
    await createOutfit({
      img_url: fields.img_url,
      style: fields.style,
      occasion: fields.occasion,
    });
  };
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <section className="rate-wrapper">
        <div className="center-piece-frame">
          <div className="outfit-center-piece-create">
            <div className="left-side">
              <div className="left-side-bg">
                {fields.img_url ? (
                  <>
                    <img
                      src={fields.img_url}
                      className="uploaded-img-blur-bg"
                      alt="Card Background"
                    />
                    <img
                      src={fields.img_url}
                      className="uploaded-image"
                      alt="Card Background"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={pHBG}
                      className="left-side-purple"
                      alt="Card Background"
                    />
                    <img
                      src={phP}
                      className="left-side-people"
                      alt="Silhouettes"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="right-side">
              <div className="create-outfit-form">
                <form onSubmit={handleSubmit}>
                  <div className="label-input">
                    <label htmlFor="imgUrl">image link</label>
                    <input
                      placeholder="instagram.com/photo"
                      className="create-input"
                      id="imgUrl"
                      required
                      type="url"
                      maxLength={1000}
                      value={fields.img_url}
                      onChange={(e) =>
                        dispatch(handleImgUrlChange(e.target.value))
                      }
                    ></input>
                  </div>
                  <div className="label-input">
                    <label htmlFor="occasion">Occasion</label>
                    <input
                      placeholder="Date night, Job interview, etc..."
                      className="create-input"
                      id="occasion"
                      type="text"
                      required
                      value={fields.occasion}
                      maxLength={38}
                      onChange={(e) =>
                        dispatch(handleOccasionChange(e.target.value))
                      }
                    ></input>
                  </div>
                  <select
                    placeholder="Select a Category"
                    className="create-outfit-select"
                    required
                    value={fields.style}
                    onChange={(e) =>
                      dispatch(handleStyleChange(e.target.value))
                    }
                  >
                    <option value="">Category</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Sexy">Sexy</option>
                  </select>
                  <button className="create-outfit-button">
                    Create Outfit
                  </button>
                </form>
              </div>
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

export default CreateOutfit;
