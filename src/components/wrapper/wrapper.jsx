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
        width: "100%",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
};
export default Wrapper;
