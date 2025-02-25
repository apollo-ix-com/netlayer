import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import Logo from "./_logo";
import { MenuItem, menuData } from "./menuData";

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);

  const renderMenuItem = (menuItem: MenuItem[]) => {
    return (
      <List className="menu-item menu-item-has-children active">
        {menuItem.map((item, index) => (
          <ListItem key={index}>
            <Link className="active px-3 fs-7 fw-normal" href={item.link}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <>
      <Logo mobile />
      <div className="xb-header-mobile-search xb-hide-xl border">
        <div className="input-group">
          <input
            type="text"
            className="search-field"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <button
            className="search-submit"
            type="submit"
            aria-label="Submit search" // Add aria-label for screen readers
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <nav className="xb-header-nav">
        <ul className="xb-menu-primary clearfix">
          {menuData.map((item, index) => {
            const isOpen = openId === index;
            return (
              <ListItem
                className={index === openId ? "active" : ""}
                key={index}
              >
                {item.subMenu || item.megaMenuData ? (
                  <Fragment>
                    <p onClick={() => setOpenId(isOpen ? 0 : index)}>
                      {item.title}
                      <i
                        className={`fa ${
                          isOpen ? "fa-angle-up" : "fa-angle-down"
                        }`}
                      />
                    </p>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      {item.subMenu ? renderMenuItem(item.subMenu) : null}
                      {item.megaMenuData
                        ? renderMenuItem(item.megaMenuData)
                        : null}
                    </Collapse>
                  </Fragment>
                ) : (
                  <Link className="active" href={item.link}>
                    {item.title}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
