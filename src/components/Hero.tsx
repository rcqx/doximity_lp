import Logo from "./Logo";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiWindows } from "react-icons/si";
import { IoKey } from "react-icons/io5";
import Styles from "./hero.tailwind";
import "./hero.css";

const Hero = () => {
  return (
    <section id="main" className={Styles.container}>
      <div id="layer" className="absolute w-full h-full" />
      <header className="h-24 flex justify-center items-center mx-20">
        <nav className="flex mx-8 w-full justify-between items-center">
          <Logo />
          <ul className="flex items-center font-bold text-white gap-12 mr-40">
            <li className={Styles.link}>APP</li>
            <li className={Styles.link}>DIALER</li>
            <li className={Styles.link}>PARTNERS</li>
            <li className={Styles.link}>ABOUT</li>
          </ul>
          <a className={Styles.link}>SIGN IN</a>
        </nav>
      </header>
      <div className="flex flex-col flex-1 mb-14">
        <div className="w-[45%] mx-20 h-full flex items-center">
          <div className="ml-28 mr-20 flex flex-col gap-6">
            <h1 className="text-[2.75em] font-bold tracking-tight text-white leading-8">
              Medicine Made Mobile
            </h1>
            <h4 className="text-xl font-bold text-white text-[1.5em] mb-4">
              Bringing tech to healthcare
            </h4>
            <div>
              <form className="flex gap-1.5 mb-3">
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
                <button className="w-1/3 bg-[#1276D3] text-white rounded-md font-semibold">
                  Find My Profile
                </button>
              </form>
              <div className="border-b border-[whitesmoke] h-7 relative">
                <p className="text-white w-fit rounded-md px-2 absolute top-4 z-1 bg-[#949493]">
                  <span>Or continue with</span>
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-2">
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
            <p className="text-white">
              Already on Doximity? <a className={Styles.linkText}>Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
