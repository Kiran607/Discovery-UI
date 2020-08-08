import React from "react";
import data from "../assests/data.json";

function SideImage() {
  return (
    <div className="image-text">
      <div className="image-text-row">
        <div className="image-text-inner">
          {data.rightText.map((postData, index) => {
            return (
              <div className="img-content" key={index}>
                <h3 id="img-txt-title">{postData.textTitle}</h3>

                <p>{postData.paragraphOne}</p>

                <p>{postData.paragraphTwo}</p>

                <p>{postData.paragraphThree}</p>

                <p>{postData.paragraphFour}</p>
              </div>
            );
          })}
          <figure className="displayImage">
            <div className="img-txt-img">
              <img
                className="card-image"
                src={require("../assests/Golf2.jpg")}
              />
            </div>
            <div className="c-img-txt__gradient o-gradient-img">
              <div className="o-gradient-img__inner">
                <img src={require("../assests/Golf2_bg.jpg")} id="bg-img" />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SideImage;
