import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerItems">
            <div className="tag">Global News Data</div>
            <h2>Your Ultimate News Aggregator</h2>
            <h4>Stay informed with the latest global news, aggregated from top sources around the world.</h4>
            <div className="newspaper">
              <FontAwesomeIcon icon={faNewspaper} />
              <p>Has over 150,000 worldwide sources</p>
            </div>
            <div className="marketing">
              <div className="marketingText">
                <span>Personalized news, FREE!</span>
                <p>
                  Imagine having access to a personalized stream of news, tailored just for you. With our platform, you
                  can stay updated from news around the world, all in one place.
                </p>
              </div>
              <div className="marketingButton">
                <button>REGISTER NOW</button>
              </div>
            </div>
          </div>
          <div className="headerItems">
            <img src="https://mediastack.com/site_images/cnn.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="headerTwo">
        <div className="featureList">
          <div className="featureItems">
            <FontAwesomeIcon icon={faNewspaper} />
            <h5>Stay Informed with Real-Time Global News</h5>
            <p>Stay Ahead of the Curve with Instant Access to Breaking News from Around the Globe</p>
          </div>
          <div className="featureItems">
            <FontAwesomeIcon icon={faNewspaper} />
            <h5>Personalized News Experience</h5>
            <p>Tailor Your News Feed to Your Interests - Only See What Matters to You</p>
          </div>
          <div className="featureItems">
            <FontAwesomeIcon icon={faNewspaper} />
            <h5>Read and Save for Later</h5>
            <p>Busy Now? Save Your Favorite Articles and Read Them at Your Convenience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
