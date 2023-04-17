import "./CreateOutfit.css";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import pHBG from "./images/low-poly-grid-haikei.png";
import phP from "./images/silhouette-fitcheck.png";
import { useState } from "react";

const CreateOutfit = () => {
  const [img, setImg] = useState()

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <section className="rate-wrapper">
        <div className="center-piece-frame">
          <div className="outfit-center-piece">
            <div className="left-side">
              <div className="left-side-bg">
                <img
                  src={ img ? img: pHBG}
                  className="left-side-purple"
                  alt="Card Background"
                />
                {/* <img src={phP} className="left-side-people" alt="Silhouettes" /> */}
              </div>
            </div>

            <div className="right-side">
              <div className="create-outfit-form">
                <form>
                  <div className="label-input">
                    <label htmlFor="imgUrl">img URL</label>
                    <input
                      id="imgUrl"
                      type="url"
                      placeholder="www.example.com"
                      onChange={(e) => setImg(e.target.value)}
                      value={img}
                    ></input>
                  </div>
                  <div className="label-input">
                    <label htmlFor="occasion">Occasion</label>
                    <input
                      id="occasion"
                      type="text"
                      placeholder="Date night, Job interview, etc..."
                    ></input>
                  </div>
                  <select
                    placeholder="Select a Category"
                    className="create-outfit-select"
                  >
                    <option selected disabled hidden>
                      Select a Category
                    </option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Sexy">Sexy</option>
                  </select>
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
