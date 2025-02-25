import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "../menuData";
import Review from "./_review";
import Author from "./_author";

import avatar from "./icon/avatar.svg";

const MegaMenu = ({ items }: { items: MenuItem[] }) => (
  <ul className="submenu">
    <li>
      <div className="mega_menu_wrapper">
        <div className="container">
          <div className="mega_menu_wrapper_inner">
            <div className="row">
              <div className="col-xl-9 p-4">
                <div className="megamenu_pages_wrapper mb-5">
                  <div className="row g-30">
                    {items.map((item, index) => (
                      <div key={index} className="col-xl-4 col-md-4">
                        <Link
                          href={item.link}
                          className="iconbox_block_2 border"
                        >
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <i
                                className={item.icon}
                                style={{ color: "blue" }}
                              ></i>
                            </small>
                            <small className="iconbox_title">
                              {item.title}
                            </small>
                          </span>
                          <span className="description mb-0">
                            {item.description}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="btns_group p-0 unordered_list justify-content-start">
                  <li>
                    <Link
                      href="/contact"
                      className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black"
                    >
                      Get free consultation
                    </Link>
                  </li>
                  <li>
                    <Review />
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <Author
                  name="User Name"
                  avatar={avatar}
                  designation="CEO @ Apollo-IX"
                  quote="“We believe in powering the digital future by creating seamless connectivity, enabling businesses to scale, innovate, and connect with the world. Every connection we make drives progress and unlocks new opportunities for our clients”."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
);

export default MegaMenu;
