import React from "react";
import "./LevelPage.css";
import { Link } from "react-router-dom";

export default function LevelPage() {
  return (
    <div className="continer">
      <div className="main">
        <div className="hero">
          <h3 className="mb-5">Choose Your Level ✨</h3>
          {/* <p>only level N5 available now</p> */}

          <div className="row">
            <div className="col-sm-3">
              <Link to="#" className="btn-branding-easy">
                N5
              </Link>
            </div>
            <div className="col-sm-2">
              <Link to="#" className="btn-branding-unvalid">
                N4
              </Link>
            </div>
            <div className="col-sm-2">
              <Link to="#" className="btn-branding-unvalid">
                N3
              </Link>
            </div>
            <div className="col-sm-2">
              <Link to="#" className="btn-branding-unvalid">
                N2
              </Link>
            </div>
            <div className="col-sm-3">
              <Link to="#" className="btn-branding-unvalid">
                N1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
