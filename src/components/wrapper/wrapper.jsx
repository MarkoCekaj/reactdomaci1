import React from "react";
const Wrapper = ({ children }) => {
  return (
    <div
      id="wrap"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
export default Wrapper;
