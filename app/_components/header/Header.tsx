"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import icon13 from "../../../public/images/icon/sms-white-icon01.svg";
import MobileMenu from "./_mobile_menu";
import { MenuItem, menuData } from "./menuData";
import Logo from "./_logo";
import HeaderTop from "./_header-top";
import ServiceMegaMenu from "./services/ServiceMegaMenu";
import MegaMenu from "./company/MegaMenu";

const Header: React.FC = () => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="xb-header-area"
      className="header-area header-style-two header-transparent"
    >
      <HeaderTop
        message="Get 15% off on all annual plans until September 30! Join Apollo-IX as we transform IX🚀"
        url="/"
      />
      <div
        className={`xb-header stricky ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="header__wrap ul_li_between">
            <Logo />
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  {menuData.map((menuItem, index) => (
                    <li
                      key={index}
                      className={
                        (menuItem.subMenu || menuItem.megaMenuData
                          ? "menu-item-has-children"
                          : "") + (menuItem.megaMenuData ? " megamenu" : "")
                      }
                    >
                      <Link href={menuItem.link}>
                        <span>{menuItem.title}</span>
                      </Link>
                      {menuItem.subMenu && <SubMenu items={menuItem.subMenu} />}

                      {menuItem.title === "Products & Services" ? (
                        menuItem.megaMenuData ? (
                          <ServiceMegaMenu items={menuItem.megaMenuData} />
                        ) : null
                      ) : menuItem.megaMenuData ? (
                        <MegaMenu items={menuItem.megaMenuData} />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="xb-header-wrap">
                <div
                  className={`xb-header-menu ${mobailActive ? "active" : ""}`}
                >
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div
                      className="xb-menu-close xb-hide-xl xb-close"
                      onClick={() => setMobailState(!mobailActive)}
                    ></div>

                    <MobileMenu />
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobailState(!mobailActive)}
                aria-label="mobile"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">
              <Link
                href="/contact"
                className="thm-btn thm-btn--aso thm-btn--header-black"
              >
                Lets talk
                <Image src={icon13} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const SubMenu = ({ items }: { items: MenuItem[] }) => (
  <ul className="submenu">
    {items.map((item, index) => (
      <li key={index}>
        <Link href={item.link}>{item.title}</Link>
      </li>
    ))}
  </ul>
);
