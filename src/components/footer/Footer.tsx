import { useState } from "react";
import logo from "../../assets/logo-d.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi2";

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
    <footer className="flex flex-col py-10 lg:py-[100px] lg:mx-20 xl:mx-[170px]">
      <div className="flex lg:h-[400px]">
        <div className="xl:flex-1 w-full lg:w-fit flex lg:block justify-center pb-10 lg:pb-0">
          <img
            src={logo}
            alt="doximity-logo-icon"
            className="h-[40px] w-[40px] min-h-[40px] min-w-[40px]"
          />
        </div>
        <div className="flex-1 hidden lg:flex pl-20 xl:pl-0 text-zinc-700">
          <ul className="flex-1 flex flex-col gap-7 text-[15px] ">
            {listOne.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className="flex-1 flex flex-col gap-7 text-[15px] 2xl:ml-20 min-w-[150px]">
            {listTwo.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className="flex-1 flex flex-col gap-7 text-[15px] 2xl:ml-20 min-w-[150px]">
            {listThree.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile footer */}
      <section>
        <ul className="flex-1 flex lg:hidden flex-col gap-7 text-[15px] text-zinc-500 border-t border-zinc-300 py-[16px]">
          <div
            className="flex justify-between text-black mx-6 cursor-pointer"
            onClick={() => setAbout(!about)}
          >
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
        <ul className="flex-1 flex lg:hidden flex-col gap-7 text-[15px] text-zinc-500 border-t border-zinc-300 py-[16px]">
          <div
            className="flex justify-between text-black mx-6 cursor-pointer"
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
        <ul className="flex-1 flex lg:hidden flex-col gap-7 text-[15px] text-zinc-500 border-t border-zinc-300 py-[16px]">
          <div
            className="flex justify-between text-black mx-6 cursor-pointer"
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

      <section className="flex justify-between py-8 border-t border-zinc-300 mx-6">
        <div className="flex flex-col items-center sm:justify-between w-full sm:flex-row">
          <span className="text-[15px] pb-5 sm:pb-0">
            © 2024 Doximity, Inc.
          </span>
          <div className="flex gap-2">
            <div className="bg-black text-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <FaTwitter size={24} />
            </div>
            <div className="bg-black text-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <FaFacebookF size={24} />
            </div>
            <div className="bg-black text-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <FaLinkedinIn size={24} />
            </div>

            <div className="bg-black text-white rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <FaYoutube size={24} />
            </div>
          </div>
        </div>
      </section>
      <p className="text-center text-[12px] text-zinc-500">
        iPhone and iPad are trademarks of Apple Inc., registered in the U.S. and
        other countries.
      </p>
    </footer>
  );
};

export default Footer;
