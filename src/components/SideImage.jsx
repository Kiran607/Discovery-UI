import React from "react";
import data from "../assests/data.json";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

function SideImage() {
  return (
    <div className="image-text-row">
      <div className="image-text-inner">
        <div className="img-content">
          <h3 id="img-txt-title">
            Perfect recreation in an unmatched location
          </h3>
          
            <div>Our widely-acclaimed courses have been designed by</div>
            <div>some of the world’s very best architects, including </div>
            <div>Robert Trent Jones Jr. and Tom Fazio.</div>
          
            <div>And it’s their genius way of transforming unique </div>
            <div>landscapes into stunningly scenic courses that make </div>
            <div>our golf experience as beautiful as it is playable.</div>
          
            <div>Every fairway rewards the perfect drive, every bunker </div>
            <div>has been carefully placed, every pin position has been </div>
            <div>meticulously planned – with all our courses thoughtfully </div>
            <div>crafted for challenge and leisure.</div>
          
          
            <div>So you can choose to take on your fellow members in </div>
            <div>ultra-competitive annual tournaments, or just play for </div>
            <div>
              the fun of it…barefoot with the family. This is luxury and{" "}
            </div>
            <div>fun on your own terms.</div>
          
        </div>
        <div className="displayImage">
            <Card className="img-txt-img">
                <CardMedia
            className="card-image"
            image={require("../assests/Golf2.jpg")}
          />
        </Card>
        <div className="c-img-txt__gradient">
            <div className="o-gradient-img__inner">

            </div>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default SideImage;
