import React from "react";
import Image from "next/image";

interface ReviewProps {
  name?: string;
}

import clogo1 from "./icon/client-logo.svg";

const Review: React.FC<ReviewProps> = () => {
  return (
    <div className="review_short_info_2 border">
      <div className="review_admin_logo">
        <Image src={clogo1} alt="" />
      </div>
      <div className="review_info_content">
        <ul className="rating_block unordered_list">
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
        </ul>
        <div className="review_counter">
          From <b>200+</b> reviews
        </div>
      </div>
    </div>
  );
};

export default Review;
