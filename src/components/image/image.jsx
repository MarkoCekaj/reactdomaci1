import React from "react";
import "./image.css";
const Image = ({ src }) => {
  return (
    <div>
      <img className="mainImage" src={`/${src}`} alt="pic" />
    </div>
  );
};
export default Image;
