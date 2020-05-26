import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px"
      }}
    >
      {/**js {} expresion {{}}can add css sytles here */}
      {props.children}
    </div>
  );
};
export default Scroll;
