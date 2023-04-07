import "./CreateOutfit.css"
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";


const CreateOutfit = () => {
    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <section className="rate-wrapper">
          <div className="center-piece-frame">
            <div className="outfit-center-piece">
              <div className="create-outfit-form">
                <form>
                  <input placeholder="image url"></input>
                  <input placeholder="occasion"></input>
                  <select placeholder="Select a Category" className="create-outfit-select">
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
        </section>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
}

export default CreateOutfit;
