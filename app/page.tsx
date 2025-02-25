
import Bg from "../public/images/bg/hero-bg02.jpg";
import icon from "../public/images/icon/magic.svg";
import gImg1 from "../public/images/gallery/cp-img01.jpg";
import gImg2 from "../public/images/gallery/cp-img02.jpg";
import gImg3 from "../public/images/gallery/cp-img03.jpg";
import gImg4 from "../public/images/gallery/cp-img04.jpg";
import gImg5 from "../public/images/gallery/cp-img05.jpg";
import gImg6 from "../public/images/gallery/cp-img06.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <section
      className="page-title cp-page-title pt-200 pos-rel bg_img"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="page-title-wrap">
          <div className="row mt-none-30 align-items-center">
            <div className="col-lg-8 mt-30">
              <div className="page-title-box">
                <span className="sub-title">
                  <Image src={icon} alt="" />
                  Careers
                </span>
                <h2 className="title">
                  Be a part of shaping the <br /> future & career opportunities{" "}
                  <br /> at Innomax today.
                </h2>
              </div>
            </div>
            <div className="col-lg-4 mt-30">
              <div className="cp-img-slide">
                <div className="cp-img-inner ul_li">
                  <div className="cp-item marquee-first">
                    <div className="xb-img">
                      <Image src={gImg1} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg2} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg3} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg1} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg2} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg3} alt="" />
                    </div>
                  </div>
                  <div className="cp-item marquee-2">
                    <div className="xb-img">
                      <Image src={gImg4} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg5} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg6} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg4} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg5} alt="" />
                    </div>
                    <div className="xb-img">
                      <Image src={gImg6} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
