import React from "react";

const Card = ({ name, email, id }) => {
  //destructuring the sprops in the arguments
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      {/*tachyons classes-background dib broder padding margins grow(animation) */}
      <img alt="robots" src={`https://robohash.org/ ${id}?200x200`} />
      {/**random picture generator through roboorgs */}
      <div>
        <h2>{name}</h2>
        {/*wrap JS syantax in {} brackets */}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
