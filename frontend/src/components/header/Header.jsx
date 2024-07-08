import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faNewspaper, faSave, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCogs, faFilter, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faGlobe} />
            <h5>Real-Time Global News</h5>
            <p>Stay ahead with real-time updates on global events, ensuring you're always in the loop.</p>
          </div>
          <div className="featureItems">
            <FontAwesomeIcon icon={faUser} />
            <h5>Personalized News Experience</h5>
            <p>
              Craft a news feed tailored to your interests, ensuring you only see the stories that resonate with you the
              most.
            </p>
          </div>
          <div className="featureItems">
            <FontAwesomeIcon icon={faBookmark} />
            <h5>Save and Read Later</h5>
            <p>Whether you're busy or want to revisit later, easily save and access articles at your convenience.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
