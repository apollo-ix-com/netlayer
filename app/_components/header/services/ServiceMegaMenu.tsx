import React, { useState } from "react";
import Link from "next/link";
import ServiceBanner from "./_banner";
import { MenuItem } from "../menuData";

const ServiceMegaMenu = ({ items }: { items: MenuItem[] }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? 0 : index);
  };

  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container">
            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
              <div className="row justify-content-lg-between">
                <div className="col-xl-8">
                  <div className="megamenu_widget_inner">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="megamenu_widget">
                          <ul className="list-group list-group-flush">
                            {items.map((item, index) => (
                              <li key={index} className="list-group-item">
                                <Link
                                  href={"#"}
                                  onClick={() => handleItemClick(index)}
                                >
                                  <p
                                    style={{
                                      fontWeight:
                                        openSubMenuIndex === index
                                          ? "bold"
                                          : "normal", // Example inline style
                                      color:
                                        openSubMenuIndex === index
                                          ? "#0f55dc"
                                          : "inherit", // Example inline style
                                    }}
                                  >
                                    <span className="fa-li ms-4">
                                      <i className={item.icon}></i>
                                    </span>
                                    {item.title}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="col-xl-8">
                        {openSubMenuIndex !== null && (
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {items[openSubMenuIndex]?.subMenu?.map(
                                (subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <span className="icon_list_text">
                                      <Link href={subItem.link}>
                                        <span className="fa-li">
                                          <i className={subItem.icon}></i>
                                        </span>
                                        {subItem.title}
                                      </Link>
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div className="social_area">
                    <SocialArea />
                  </div> */}
                </div>
                <div className="col-xl-3">
                  <ServiceBanner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ServiceMegaMenu;
