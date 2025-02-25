import React from "react";
import Image, { StaticImageData } from "next/image";

interface AuthorProps {
  name: string;
  avatar: StaticImageData;
  designation?: string;
  quote?: string;
}

import quotes from "./icon/quote.png";

const Author: React.FC<AuthorProps> = ({
  name,
  quote,
  avatar,
  designation,
}) => {
  return (
    <div className="autpr_box">
      <div className="site_author">
        <div className="author_box">
          {avatar && (
            <div className="author_image bg-light">
              <Image src={avatar} alt="" />
            </div>
          )}
          {name && (
            <div className="author_box_content">
              <h3 className="author_name text-white">{name}</h3>
              <span className="author_designation text-white">
                {designation}
              </span>
            </div>
          )}
        </div>
        {quote && <p className="mb-0 text-white">{quote}</p>}
        <div className="author_box_quote">
          <Image src={quotes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Author;
