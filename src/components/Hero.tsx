import Logo from "./Logo";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiWindows } from "react-icons/si";
import { IoKey } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import Styles from "./hero.tailwind";
import "./hero.css";

const Hero = () => {
  return (
    <section id="main" className={Styles.container}>
      <div id="layer" className={Styles.layer} />
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          <Logo />
          <ul className={Styles.list}>
            <li className={Styles.link}>APP</li>
            <li className={Styles.link}>DIALER</li>
            <li className={Styles.link}>PARTNERS</li>
            <li className={Styles.link}>ABOUT</li>
          </ul>
          <a className={`${Styles.signin} `}>SIGN IN</a>
          <BsList size={36} className={Styles.listIcon} />
        </nav>
      </header>
      <div className={Styles.heroWrapper}>
        <div className={Styles.hero}>
          <div className={Styles.heroLeft}>
            <h1 className={Styles.title}>Medicine Made Mobile</h1>
            <h4 className={Styles.subtitle}>Bringing tech to healthcare</h4>
            <div className={Styles.formWrapper}>
              <form className={Styles.form}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={Styles.input}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={Styles.input}
                />
                <button className={Styles.button}>Find My Profile</button>
              </form>
              <div className={Styles.continueWrapper}>
                <p className={Styles.continue}>
                  <span>Or continue with</span>
                </p>
              </div>
            </div>
            <div className={Styles.authWrapper}>
              <div className={Styles.icon}>
                <FaApple size="32" />
              </div>
              <div className={Styles.icon}>
                <FcGoogle size="28" />
              </div>
              <div className={Styles.icon}>
                <SiWindows size="20" />
              </div>
              <div className={Styles.icon}>
                <IoKey size="28" />
              </div>
            </div>
            <p className={Styles.signin2}>
              Already on Doximity? <a className={Styles.linkText}>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
