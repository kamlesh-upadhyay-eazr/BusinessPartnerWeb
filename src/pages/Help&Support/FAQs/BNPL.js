import React, { useState } from "react";

const BNPL = () => {
  const [clicked, setClicked] = useState(false);

  const showAnswer = () => {
    setClicked(!clicked);
  };
  return (
    <div className="bnpl-div">
      <div className="faq-questions" onClick={showAnswer}>
        <h3>Get Ready to Buy now Pay later</h3>
        {clicked ? (
          <i class="fas fa-angle-up"></i>
        ) : (
          <i class="fas fa-angle-down"></i>
        )}
      </div>
      <div
        className="faq-answers"
        style={{ display: clicked ? "block" : "none" }}
      >
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitati on ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint oc caecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
};

export default BNPL;
