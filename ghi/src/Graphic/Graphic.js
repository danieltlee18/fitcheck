import Spline from "@splinetool/react-spline";
import "./Graphic.css";
import logo from "./images/fitCheckLogo.png";

const Graphic = () => {
  return (
    <section className="wrapper">
      <Spline
        className="spline"
        scene="https://prod.spline.design/3otfNvPQRgOnYZrA/scene.splinecode"
      />
      <div className="content">
        <img src={logo} alt="logo" />
        <h1>
          GET YOUR OUTFITS RATED. <br />
          RATE OTHER'S OUTFITS.
        </h1>
        <div className="buttons">
          <a href="/dashboard">
            <button>LOG IN</button>
          </a>
          <button>SIGN UP</button>
        </div>
      </div>
    </section>
  );
};

export default Graphic;
