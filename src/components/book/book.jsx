import React from "react";
import Image from "../image/image";
import "./book.css";
const Book = ({ name, year, author, src, quote }) => {
  return (
    <div className="bookContainer">
      <div className="bookWrapper">
        <div className="bookInfo">
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Release year:</strong> {year}
          </div>
          <div>
            <strong>Author:</strong> {author}
          </div>
          <div>
            <strong>Quote:</strong> {quote}
          </div>
          <div className="bookImage">
            <Image src={src} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
