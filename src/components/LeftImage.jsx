import React from "react";
import data from "../assests/data.json";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

function LeftImage() {
  return (
    <div className="image-text-row">
      <div className="image-text-inner">
        
        <div className="displayImage">
            <Card className="img-txt-img">
                <CardMedia
            className="card-image"
            image={require("../assests/Golf_ComfortStation.jpg")}
          />
        </Card>
        <div className="c-img-txt__gradient">
            <div className="o-gradient-img__inner">

            </div>
            </div> 
        </div>
        <div className="img-content">
          <h3 id="img-txt-title">
          Extraordinary finishing touches
          </h3>
          
           <p>
           Our signature clubhouses and comfort stations make 
            every round of golf so much more than just a game –  
            giving you the opportunity to enjoy outstanding 
            amenities with every detail thought of and every taste 
            catered to.
           </p>
          
            <p>
            Take a well-earned breather and recharge in our 
            beautifully relaxed and inviting comfort stations. Admire 
            some of nature’s most breathtaking views while kicking 
            back with a refreshing drink and hearty snack during a 
            round. And if you’ve worked up an appetite for 
            something a little more substantial, you’ll also find 
            refined gourmet offerings from our on course chefs 
            ready and waiting to take your order. 
            </p>

           <p>
           Pick up some professional tips with a private lesson or 
           practice your game in our state-of-the-art facilities. 
           </p>
          
          
            <div>So you can choose to take on your fellow members in </div>
            <div>ultra-competitive annual tournaments, or just play for </div>
            <div>
              the fun of it…barefoot with the family. This is luxury and{" "}
            </div>
            <div>fun on your own terms.</div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftImage;