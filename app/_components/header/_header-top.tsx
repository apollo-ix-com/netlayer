import React from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
// import icon1 from "../../public/images/shape/trangle-shape1.png";

interface HeaderTopProps {
  className?: string;
  message: string;
  url?: string;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ message, url = "#" }) => {
  return (
    <Fade
      direction="down"
      triggerOnce={false}
      duration={1000}
      delay={9}
      className="header-top"
    >
      <div>
        <span>{message}</span>
        <span>
          <Link href={url}>Learn more</Link>
          <i className="far fa-angle-right"></i>
        </span>
        {/* <div className="d-none d-sm-block header-shape">
          <div className="shape shape--one">
            <Image src={icon1} alt="" />
          </div>
          <div className="shape shape--two">
            <Image src={icon1} alt="" />
          </div>
        </div> */}
      </div>
    </Fade>
  );
};

export default HeaderTop;
