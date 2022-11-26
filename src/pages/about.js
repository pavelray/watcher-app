import React from "react";
import Layout from "../component/UI/Layout/Layout";
import { APP_NAME } from "../utils/constants";
import "../styles/aboutPage.scss";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="about-title">{APP_NAME}</div>
        <div className="about-sub-heading">All about entertenment</div>
        <div className="about-body">
          <p>
            This app is developed using TMDB API. All data provided by the TMDB.
            This is an educational app which shows in which OTT platform the
            Movie/Tv series is available.
          </p>
          <p><b>Another Version with more features - Comming Soon !!</b></p>
          <p><b>Mobile App - Comming Soon !!</b></p>
        </div>

        <div className="about-extra">
          <div className="coffee">
            <a
              href="https://www.buymeacoffee.com/pavelray"
              title="If you like my effort, you can buy me a coffee :)"
              target="_blank" rel="noreferrer"
            >
              Buy me a Coffee
            </a>
            <span className="material-symbols-outlined">coffee</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
