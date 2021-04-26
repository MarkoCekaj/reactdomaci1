import React from "react";
import Image from "../image/image";
import "./idcard.css";
const IdCard = ({ name, surname, date, city, src }) => {
  return (
    <div className="idContainer">
      <div className="idWrapper">
        <div className="idInfo">
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Surname:</strong> {surname}
          </div>
          <div>
            <strong>Born:</strong> {date}
          </div>
          <div>
            <strong>City:</strong> {city}
          </div>
        </div>
        <div className="idImage">
          <Image src={src} />
        </div>
      </div>
    </div>
  );
};
export default IdCard;
