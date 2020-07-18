import React from "react";
import PromotionAnimatiom from "./Animation";
import Enroll from "./Enroll";
const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        <PromotionAnimatiom />
        <Enroll />
      </div>
      <div className="enroll_input"></div>
    </div>
  );
};

export default Promotion;
