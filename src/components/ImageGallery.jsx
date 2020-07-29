import React from 'react';

export default class ImageGallery extends React.Component{
    render(){
        return(
            <div className="imageGallery">
                <div className="imageSlide">
                    <img src={require("../assests/beach.jpg")} alt=""/>
                </div>
            </div>
        );
    }
}