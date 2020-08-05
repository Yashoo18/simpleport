import React from "react";
import "./head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlogger,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <nav>
      <div className="header">
        <div className="ih">
          <div className="logo">
            <h1>Liesel</h1>
          </div>
          <div className="test">
            <a href="https://www.linkedin.com/in/lieselva" className="l social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/lieselvaidya" className="twit social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
