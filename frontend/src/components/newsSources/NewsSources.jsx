import React from "react";
import "./newsSources.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faEarthAmerica, faRss, faSync } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, faFlag, faStar } from "@fortawesome/free-regular-svg-icons";

const NewsSources = () => {
  return (
    <div className="newsSources">
      <div className="nsContainer">
        <div className="nsItems">
          <div className="nsItemsContainer">
            <h4>Access 150,000 News Sources Worldwide</h4>
            <h5>
              Feed the latest and most popular news articles into your application or website, fully automated & updated
              every minute.
            </h5>
            <div className="nsItemsFlex">
              <div className="nsItemsLogo">
                <img src="/World-White.png" alt="" />
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
              <div className="nsItemsList">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faSync} />
                    Real-Time News Data
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    Historical News Data
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} />
                    Headline News
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faRss} />
                    150,000+ News Sources
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEarthAmerica} />
                    54 Countries
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFlag} />
                    14 Languages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="nsItems">
          <img src="https://mediastack.com/site_images/sources_graphic.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsSources;
