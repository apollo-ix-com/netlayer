import React from "react";
import Image, { StaticImageData } from "next/image";
// import mImg from "../../../public/images/casestudy/mm_img.png";

interface ServiceBannerProps {
  title: string;
  description: string;
  img: StaticImageData;
}


import Link from "next/link";

const ServiceBanner: React.FC<any> = ({ title }) => {
  return (
    <div className="megamenu_case">
      <h3>Peering</h3>
      <h4>Boarding soon..</h4>
      {/* <Image src={mImg} alt="" /> */}
      <Link className="megamenu_btn" href="/casestudy">
        <span className="btn_label">Read more</span>
        <span className="btn_icon">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 7.47917e-07C2.44771 4.10743e-07 2 0.447716 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292894L0.292893 11.2929L1.70711 12.7071Z"
              fill="white"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default ServiceBanner;
