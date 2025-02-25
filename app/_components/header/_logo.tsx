import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import logo from "./company/icon/netlayer-logo.png";

interface LogoProps {
  mobile?: boolean;
}

const Logo: React.FC<LogoProps> = ({ mobile }) => {
  return (
    <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
      <div
        className={`${mobile ? "xb-logo-mobile xb-hide-xl" : "header-logo"}`}
      >
        <Link href="/" rel="home">
          <Image src={logo} width="180" alt="" />
        </Link>
      </div>
    </Fade>
  );
};

export default Logo;
