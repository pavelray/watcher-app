import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSeasonDetailsAPIUrl } from "../../../utils/apiUtills";
import { API_IMAGE_URL } from "../../../utils/constants";
import "./SeasonDetails.scss";

const SeasonDetails = ({ seasons, id }) => {
  const [seasonDetails, setSeasonDetails] = useState([]);

  useEffect(() => {
    let seasonsData = [];
    const fetchSeasonDetails = async (id, seasonNo) => {
      const url = getSeasonDetailsAPIUrl(id, seasonNo);
      const resp = await axios.get(url);
      const { data } = resp;
      return data;
    };
    seasons?.forEach((s) => {
      const data = fetchSeasonDetails(id, s.season_number);
      seasonsData.push(data);
    });
    Promise.all(seasonsData).then((values) => {
      setSeasonDetails(values);
    });
  }, [id, seasons]);

  const handleTabClick = (e) => {
    const selectedTabId = e.target.dataset.id;

    document.querySelectorAll(".tabs").forEach((el) => {
      el.classList.remove("tabs-active");
    });
    document.querySelectorAll(".tab").forEach((el) => {
      el.classList.remove("active");
    });

    e.target.classList.add("tabs-active");
    document.querySelector(`.tab${selectedTabId}`).classList.add("active");
  };

  return (
    <div className="season-container">
      <div className="season-tabs">
        {seasonDetails.map((season, index) => (
          <div
            className={`tabs ${index === 0 ? "tabs-active" : ""}`}
            data-id={index}
            onClick={handleTabClick}
          >
            {season.name}
          </div>
        ))}
      </div>
      {seasonDetails.map((season, index) => (
        <div
          className={`tab tab${index} ${index === 0 ? "active" : ""}`}
          data-id={index}
        >
          <div className="season-wrapper">
            {season.episodes.map((episode) => (
              <div className="media-card">
                <img
                  src={`${API_IMAGE_URL}/w400/${episode.still_path}`}
                  alt=""
                />
                <div className="media-card__title">
                  <span>
                    {episode.episode_number}. {episode.name}
                  </span>
                  <span>{episode.runtime}m</span>
                </div>
                <div className="media-card__body">
                  <p>{episode.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonDetails;
