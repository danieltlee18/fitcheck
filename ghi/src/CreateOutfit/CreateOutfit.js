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
  reset,
  error,
} from "../features/outfits/outfitsSlice";

const CreateOutfit = () => {
  const dispatch = useDispatch();
  const { errorMessage, fields } = useSelector((state) => state.outfit);
  const [img, setImg] = useState()
  const [createOutfit] = useCreateOutfitMutation();


  const handleSubmit = async (e) => {
    const result = await createOutfit({
      img_url: fields.img_url,
      style: fields.style,
      occasion: fields.occasion,
    })
    console.log(result)
  }
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
                <img
                  src={fields.img_url ? fields.img_url : pHBG}
                  className="left-side-purple"
                  alt="Card Background"
                />
                {/* <img src={phP} className="left-side-people" alt="Silhouettes" /> */}
              </div>
            </div>

            <div className="right-side">
              <div className="create-outfit-form">
                <form onSubmit={handleSubmit}>
                  <div className="label-input">
                    <label htmlFor="imgUrl">img URL</label>
                    <input
                      placeholder="www.example.com"
                      id="imgUrl"
                      required
                      type="url"
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
                      id="occasion"
                      type="text"
                      required
                      value={fields.occasion}
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
                    <option value="">
                      Select a Category
                    </option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Sexy">Sexy</option>
                  </select>
                  <button className="signup-button">Create Outfit</button>
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
