import "./UserOutfits.css";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
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

const UserOutfits = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <section className="rate-wrapper">
        <div className="center-piece-frame">
          <div className="outfit-center-piece">
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
