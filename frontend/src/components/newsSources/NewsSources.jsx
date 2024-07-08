import React from "react";
import "./newsSources.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faRefresh } from "@fortawesome/free-solid-svg-icons";

const NewsSources = () => {
  return (
    <div className="newsSources">
      <div className="nsContainer">
        <div className="nsItems">
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
                  <FontAwesomeIcon icon={faRefresh} />
                  13 Languages
                </li>
                <li>
                  <FontAwesomeIcon icon={faRefresh} />
                  13 Languages
                </li>
                <li>
                  <FontAwesomeIcon icon={faRefresh} />
                  13 Languages
                </li>
                <li>
                  <FontAwesomeIcon icon={faRefresh} />
                  13 Languages
                </li>
                <li>
                  <FontAwesomeIcon icon={faRefresh} />
                  13 Languages
                </li>
              </ul>
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
