import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useListOutfitQuery } from "../services/outfit";
import { useGetAccountQuery } from "../services/auth";
import Navbar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import KUTE from "kute.js";
import tom1 from "./images/tom1.webp";
import tom2 from "./images/tom2.jpeg";
import tom3 from "./images/tom3.webp";
import cardBg from "./images/low-poly-grid-haikei.png";
import silho from "./images/silhouette-fitcheck.png";
import { subCategories, averageRatings } from "../UserOutfits/styleUtilities";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { data: outfits, isLoading } = useListOutfitQuery();
  const { data: user, isLoading: isUserLoading } = useGetAccountQuery();
  console.log(outfits);

  if (isLoading || isUserLoading) {
    return <div>loading</div>;
  } else {
    let sorted = [...outfits];
    sorted.sort((a, b) => b.avg_rating - a.avg_rating);
    return (
      <>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="menu-wrapper">
          <div className="menu">
            <div className="left">
              {outfits.filter((outfit) => outfit.account_id == user.id)
                .length == 0 ? (
                <div className="dash-no-fits">
                  <Link to="/createoutfit">
                    <h1>
                      UPLOAD AN OUTFIT <br /> TO SEE IT HERE!
                    </h1>
                  </Link>
                </div>
              ) : (
                <>
                  <h1>My Top Outfits</h1>
                  {sorted
                    .filter((outfit) => outfit.account_id == user.id)
                    .map((outfit) => {
                      return (
                        <div key={outfit.id} className="outfit-summary">
                          <div className="img-box">
                            <img src={outfit.img_url} />
                          </div>
                          <div className="ratings">
                            <div className="rating">
                              <p>{subCategories(outfit)[0]}</p>
                              <div
                                style={{
                                  width: `${20 * averageRatings(outfit)[0]}%`,
                                }}
                                className="percentage"
                              ></div>
                            </div>
                            <div className="rating">
                              <p>{subCategories(outfit)[1]}</p>
                              <div
                                style={{
                                  width: `${20 * averageRatings(outfit)[1]}%`,
                                }}
                                className="percentage2"
                              ></div>
                            </div>
                            <div className="rating">
                              <p>{subCategories(outfit)[2]}</p>
                              <div
                                style={{
                                  width: `${20 * averageRatings(outfit)[2]}%`,
                                }}
                                className="percentage3"
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                    .slice(0, 3)}
                </>
              )}{" "}
            </div>
            <div className="right">
              <div className="card">
                <img src={cardBg} className="cardBG" alt="Card Background" />
                <img src={silho} className="sil" alt="Silhouettes" />
              </div>
              <div className="category">
                <div>
                  <Link to="/rate">
                    <button className="dashButton">Rate some fits!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pink">
          <div className="spacer layer1 flip"></div>
          <div id="pink-blobs">
            <svg
              viewBox="0 0 960 300"
              width="960"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <linearGradient
                  id="grad1_0"
                  x1="68.8%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="-14.000000000000007%"
                    stopColor="#282b30"
                    stopOpacity="1"
                  ></stop>
                  <stop
                    offset="114.00000000000001%"
                    stopColor="#282b30"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <defs>
                <linearGradient
                  id="grad2_0"
                  x1="0%"
                  y1="0%"
                  x2="31.3%"
                  y2="100%"
                >
                  <stop
                    offset="-14.000000000000007%"
                    stopColor="#282b30"
                    stopOpacity="1"
                  ></stop>
                  <stop
                    offset="114.00000000000001%"
                    stopColor="#282b30"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g transform="translate(960, 0)" id="right-blob">
                <path
                  id="blob1_right"
                  d="M0 255C-11.4 231.3 -22.7 207.6 -35.8 202.9C-48.8 198.2 -63.6 212.5 -79.7 218.9C-95.8 225.4 -113.4 224.1 -123 213C-132.6 201.9 -134.4 181.1 -141.4 168.5C-148.4 156 -160.8 151.8 -171.6 144C-182.4 136.2 -191.7 124.8 -193.1 111.5C-194.6 98.2 -188.1 83.2 -199.2 72.5C-210.3 61.9 -238.9 55.6 -251.1 44.3C-263.3 32.9 -259.2 16.5 -255 0L0 0Z"
                  fill="#ff90f8"
                ></path>
              </g>
              <g transform="translate(0, 300)">
                <path
                  id="blob1_left"
                  d="M0 -255C13.2 -241.6 26.5 -228.2 38.9 -220.6C51.3 -212.9 62.9 -211 77 -211.4C91 -211.8 107.4 -214.6 123 -213C138.6 -211.5 153.2 -205.6 163.9 -195.3C174.6 -185.1 181.2 -170.4 184.6 -154.9C188 -139.4 188.1 -123 187.9 -108.5C187.8 -94 187.5 -81.2 193.6 -70.5C199.7 -59.7 212.2 -50.8 223.6 -39.4C234.9 -28 244.9 -14 255 0L0 0Z"
                  fill="#ff90f8"
                ></path>
              </g>

              <g transform="translate(960, 0)">
                <path
                  id="blob2_right"
                  d="M0 255C-14.2 252.7 -28.4 250.3 -43.8 248.2C-59.1 246 -75.7 244 -83.1 228.3C-90.5 212.7 -88.8 183.4 -103.5 179.3C-118.2 175.1 -149.2 196.1 -162.6 193.8C-176.1 191.5 -172 165.8 -182.3 153C-192.6 140.1 -217.4 140.1 -220.8 127.5C-224.3 114.9 -206.5 89.8 -201.1 73.2C-195.7 56.6 -202.7 48.5 -213.7 37.7C-224.8 26.9 -239.9 13.4 -255 0L0 0Z"
                  fill="#ff90f8"
                ></path>
              </g>
              <g transform="translate(0, 300)" style={{ visibility: "hidden" }}>
                <path
                  id="blob2_left"
                  d="M0 -255C13.7 -249.1 27.4 -243.2 42.7 -242.3C58 -241.4 74.9 -245.5 86.9 -238.7C98.8 -231.9 105.9 -214.2 118.5 -205.2C131.1 -196.3 149.2 -196.2 153.6 -183.1C158 -170 148.6 -143.9 160.9 -135C173.1 -126.1 206.9 -134.3 220.8 -127.5C234.7 -120.7 228.7 -98.9 224.6 -81.7C220.4 -64.6 218.2 -52.3 223.6 -39.4C228.9 -26.6 242 -13.3 255 0L0 0Z"
                  fill="#ff90f8"
                ></path>
              </g>
            </svg>
          </div>
          <div className="spacer layer1"></div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
  }
};
export default Dashboard;
