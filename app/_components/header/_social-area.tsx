import React from "react";
import Link from "next/link";

const SocialArea = () => {
  return (
    <>
      <div className="social_inner ul_li mt-2">
        <h5>Follow Us:</h5>
        <ul className="social_icons_block unordered_list">
          <li>
            <Link href="https://x.com/_ApolloIX">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/ApolloIX">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/ApolloIX">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href="https://x.com/_ApolloIX">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
      </div>
      <p className="career_link mt-2">
        Looking for new career? <Link href="/career">We’re Hiring</Link>
      </p>
    </>
  );
};

export default SocialArea;
