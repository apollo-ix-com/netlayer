// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import icon13 from "../../../public/images/icon/sms-white-icon01.svg";
// import clogo1 from "../../../public/images/logo/client-logo.svg";
// import avatar from "../../../public/images/bg/avatar.png";
// import quote from "../../../public/images/icon/quote.png";
// import mImg from "../../../public/images/casestudy/mm_img.png";
// import MobileMenu from "./_mobile_menu";
// import { MenuItem, menuData } from "./menuData";
// import Logo from "./_logo";
// import HeaderTop from "./_header-top";
// import SocialArea from "./_social-area";
// import Author from "./company/_author";
// import Review from "./company/_review";

// const Header: React.FC = () => {
//   const [mobailActive, setMobailState] = useState(false);
//   const [isSticky, setSticky] = useState(false);
//   const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

//   const handleTitleClick = (title: string) => {
//     setSelectedTitle(title === selectedTitle ? null : title); // Toggle the selection
//   };

//   return (
//     <div
//       id="xb-header-area"
//       className="header-area header-style-two header-transparent"
//     >
//       <HeaderTop
//         message="Get 15% off on all annual plans until September 30! Join Texpo as we transform SEO 🚀"
//         url="/demo"
//       />
//       <div
//         className={`xb-header stricky ${
//           isSticky ? "stricked-menu stricky-fixed" : ""
//         }`}
//       >
//         <div className="container">
//           <div className="header__wrap ul_li_between">
//             <Logo />
//             <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
//               <nav className="main-menu collapse navbar-collapse">
//                 <ul>
//                   {menuData.map((menuItem, index) => (
//                     <li
//                       key={index}
//                       className={
//                         (menuItem.subMenu || menuItem.megaMenuData
//                           ? "menu-item-has-children"
//                           : "") + (menuItem.megaMenuData ? " megamenu" : "")
//                       }
//                     >
//                       <Link
//                         href={menuItem.link}
//                         onClick={() => handleTitleClick(menuItem.title)}
//                       >
//                         <span>{menuItem.title}</span>
//                       </Link>
//                       {menuItem.subMenu && <SubMenu items={menuItem.subMenu} />}

//                       {menuItem.title === "Services" &&
//                       menuItem.megaMenuData &&
//                       selectedTitle === "Services" ? (
//                         <ServiceMegaMenu items={menuItem.megaMenuData} />
//                       ) : menuItem.megaMenuData ? (
//                         <MegaMenu items={menuItem.megaMenuData} />
//                       ) : null}
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//               <div className="xb-header-wrap">
//                 <div
//                   className={`xb-header-menu ${mobailActive ? "active" : ""}`}
//                 >
//                   <div className="xb-header-menu-scroll lenis lenis-smooth">
//                     <div
//                       className="xb-menu-close xb-hide-xl xb-close"
//                       onClick={() => setMobailState(!mobailActive)}
//                     ></div>

//                     <MobileMenu />
//                   </div>
//                 </div>
//                 <div className="xb-header-menu-backdrop"></div>
//               </div>
//             </div>
//             <div className="header-bar-mobile side-menu d-xl-none">
//               <button
//                 className="xb-nav-mobile"
//                 onClick={() => setMobailState(!mobailActive)}
//                 aria-label="mobile"
//               >
//                 <i className="fa-solid fa-bars"></i>
//               </button>
//             </div>
//             <div className="header-contact d-none d-md-block">
//               <Link
//                 href="/contact"
//                 className="thm-btn thm-btn--aso thm-btn--header-black"
//               >
//                 Lets talk
//                 <Image src={icon13} alt="" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// const SubMenu = ({ items }: { items: { title: string; link: string }[] }) => (
//   <ul className="submenu">
//     {items.map((item, index) => (
//       <li key={index}>
//         <Link href={item.link}>{item.title}</Link>
//       </li>
//     ))}
//   </ul>
// );

// const MegaMenu = ({
//   items,
// }: {
//   items: { title: string; link: string; icon: string; description: string }[];
// }) => (
//   <ul className="submenu">
//     <li>
//       <div className="mega_menu_wrapper">
//         <div className="container">
//           <div className="mega_menu_wrapper_inner">
//             <div className="row">
//               <div className="col-xl-9 p-4">
//                 <div className="megamenu_pages_wrapper mb-5">
//                   <div className="row g-30">
//                     {items.map((item, index) => (
//                       <div key={index} className="col-xl-4 col-md-4">
//                         <Link
//                           href={item.link}
//                           className="iconbox_block_2 border"
//                         >
//                           <span className="icon_title_wrap">
//                             <small className="iconbox_icon">
//                               <Image src={item.icon} alt="" />
//                             </small>
//                             <small className="iconbox_title">
//                               {item.title}
//                             </small>
//                           </span>
//                           <span className="description mb-0">
//                             {item.description}
//                           </span>
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <ul className="btns_group p-0 unordered_list justify-content-start">
//                   <li>
//                     <Link
//                       href="/contact"
//                       className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black"
//                     >
//                       Get free consultation
//                     </Link>
//                   </li>
//                   <li>
//                     <Review />
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-xl-3">
//                 <Author
//                   name="Maverick Phoenix"
//                   avatar={avatar}
//                   designation="CEO At Innomax"
//                   quote="“As a CEO at innomax I have been voice crying in the wilderness, trying to make requirements clear, use every minute to deliver the result, and not reinvent the wheel. Here at innomax, I made that possible for the clients”."
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// );

// const ServiceMegaMenu = ({ items }: { items: MenuItem[] }) => (
//   <ul className="submenu">
//     <li>
//       <div className="mega_menu_wrapper">
//         <div className="container">
//           <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
//             <div className="row justify-content-lg-between">
//               <div className="col-xl-8">
//                 <div className="megamenu_widget_inner">
//                   <div className="row">
//                     <div className="col-xl-4">
//                       <div className="megamenu_widget">
//                         <ul className="icon_list unordered_list_block">
//                           {items.map((item, index) => (
//                             <li key={index}>
//                               <Link href={item.link}>
//                                 <span className="icon_list_text">
//                                   {item.title}
//                                 </span>
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="col-xl-8">
//                       <div className="megamenu_widget">
//                         {items.map((serviceItem, index) => (
//                           <ul
//                             key={index}
//                             className="icon_list unordered_list_block"
//                           >
//                             {serviceItem.subMenu?.map((subItem, subIndex) => (
//                               <li key={subIndex}>
//                                 <Link href={subItem.link}>
//                                   <span className="icon_list_text">
//                                     {subItem.title}
//                                   </span>
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="social_area">
//                   <SocialArea />
//                 </div>
//               </div>
//               <div className="col-xl-3">
//                 <div className="megamenu_case">
//                   <h3>Software</h3>
//                   <Image src={mImg} alt="" />
//                   <div className="case_study_info">
//                     <h4>Case Study</h4>
//                     <p>
//                       We provide SEO Services that help companies maximize their
//                       online presence.
//                     </p>
//                     <ul className="unordered_list">
//                       <li>
//                         <Link href="/contact">Get Started</Link>
//                       </li>
//                       <li>
//                         <Link href="/service">Read More</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   </ul>
// );
