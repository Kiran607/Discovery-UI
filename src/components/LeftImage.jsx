import React from "react";
import data from "../assests/data.json";

function LeftImage() {
  return (
    <div className="image-text-left">
      <div className="image-text-row-left">
        <div className="image-text-inner-left">
          <figure className="displayImage-left">
            <div className="img-txt-img">
              <img
                className="card-image"
                src={require("../assests/Golf_ComfortStation.jpg")}
              />
            </div>
            <div className="img-txt-left-bg">
              <div className="img-txt-inner-left-gradient">
                <img src={require("../assests/Golf2_bg.jpg")} id="bg-img" />
              </div>
            </div>
          </figure>
          {data.leftText.map((postData, index) => {
            return (
              <div className="img-content-left" key={index}>
                <h3 id="img-txt-title">{postData.textTitle}</h3>

                <p>{postData.para1}</p>

                <p>{postData.paragraph2}</p>

                <p>{postData.paragraph3}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
