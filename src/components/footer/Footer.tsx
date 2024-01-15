import { useState } from "react";
import logo from "../../assets/logo-d.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Styles from "./footer.tailwind";

const listOne = ["About us", "Press", "Investors", "Blog", "Work@", "Contact"];
const listTwo = [
  "Doximity App",
  "Op-Med",
  "Research",
  "Directory",
  "Terms of Service",
  "Privacy",
];
const listThree = [
  "Partner Overview",
  "Residency Navigator",
  "Developer API",
  "Hiring Solutions",
  "Hospital Solutions",
  "Help",
];

const Footer = () => {
  const [about, setAbout] = useState(false);
  const [clinicians, setClinicians] = useState(false);
  const [partners, setPartners] = useState(false);

  return (
    <footer className={Styles.wrapper}>
      <div className={Styles.contentContainer}>
        <div className={Styles.navColumn}>
          <img src={logo} alt="doximity-logo-icon" className={Styles.logo} />
        </div>
        <div className={Styles.navLinks}>
          <ul className={Styles.navList}>
            {listOne.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className={Styles.navList}>
            {listTwo.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className={Styles.navList}>
            {listThree.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile footer */}
      <section>
        <ul className={Styles.mobileSection}>
          <div className={Styles.mobileHeader} onClick={() => setAbout(!about)}>
            <h1 className="text-[17px]">ABOUT</h1>
            <HiOutlineChevronDown size={24} />
          </div>
          <div className={`${about ? "flex flex-col gap-5" : "hidden"}`}>
            {listOne.map((item: string) => (
              <li className="mx-6 cursor-pointer w-fit">{item}</li>
            ))}
          </div>
        </ul>
      </section>
      <section>
        <ul className={Styles.mobileSection}>
          <div
            className={Styles.mobileHeader}
            onClick={() => setClinicians(!clinicians)}
          >
            <h1 className="text-[17px]">CLINICIANS</h1>
            <HiOutlineChevronDown size={24} />
          </div>
          <div className={`${clinicians ? "flex flex-col gap-5" : "hidden"}`}>
            {listTwo.map((item: string) => (
              <li className="mx-6 cursor-pointer w-fit">{item}</li>
            ))}
          </div>
        </ul>
      </section>
      <section>
        <ul className={Styles.mobileSection}>
          <div
            className={Styles.mobileHeader}
            onClick={() => setPartners(!partners)}
          >
            <h1 className="text-[17px]">PARTNERS</h1>
            <HiOutlineChevronDown size={24} />
          </div>
          <div className={`${partners ? "flex flex-col gap-5" : "hidden"}`}>
            {listThree.map((item: string) => (
              <li className="mx-6 cursor-pointer w-fit">{item}</li>
            ))}
          </div>
        </ul>
      </section>

      <section className={Styles.footerSection}>
        <div className={Styles.footerWrapper}>
          <span className={Styles.copyright}>© 2024 Doximity, Inc.</span>
          <div className={Styles.socialIcons}>
            <div className={Styles.socialIcon}>
              <FaTwitter size={24} />
            </div>
            <div className={Styles.socialIcon}>
              <FaFacebookF size={24} />
            </div>
            <div className={Styles.socialIcon}>
              <FaLinkedinIn size={24} />
            </div>

            <div className={Styles.socialIcon}>
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </section>
      <p className={Styles.disclaimer}>
        iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and
        other countries.
      </p>
    </footer>
  );
};

export default Footer;
