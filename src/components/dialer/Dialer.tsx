import { useState } from "react";
import DialerCard from "./dialerCard/DialerCard";
import grandpa from "../../assets/dialer1.webp";
import telemedicine from "../../assets/telemedicine.svg";
import phoneNums from "../../assets/dialer2.webp";
import search from "../../assets/dialer3.webp";
import fax from "../../assets/dialer4.webp";
import faxSvg from "../../assets/fax.svg";
import mobileDialer from "../../assets/mobile-dialer.svg";
import mobileSearch from "../../assets/mobileSearch.svg";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Dialer = () => {
  const [tabs, setTabs] = useState([1, 0, 0, 0]);
  const tabsNames = ["Dialer Video", "Dialer Voice", "Search", "Fax"];
  const next = (state: number[]) => {
    if (state[state.length - 1] !== 1) {
      const indexPosition = state.indexOf(1);
      const aux = new Array(4).fill(0);
      aux[indexPosition + 1] = 1;
      setTabs(aux);
    } else {
      const aux = new Array(4).fill(0);
      aux[0] = 1;
      setTabs(aux);
    }
  };

  const prev = (state: number[]) => {
    if (state[0] !== 1) {
      const indexPosition = state.indexOf(1);
      const aux = new Array(4).fill(0);
      aux[indexPosition - 1] = 1;
      setTabs(aux);
    } else {
      const aux = new Array(4).fill(0);
      aux[aux.length - 1] = 1;
      setTabs(aux);
    }
  };

  const videoDesc = `
    Dialer Video connects you to your patient through a no-reply text
    message. Your cell number is kept private — you designate the callback
    number. And it works with any smartphone. Your patient does not need
    to download an app or create an account. With a simple tap,
    you're practicing telemedicine.
  `;

  const voiceDesc = `
  Your solution to calling patients on-the-go. A way for you to call patients
  using your cell phone, while displaying your office number. Integration with
  Epic's Haiku app allows you to call patients directly from their chart. No
  longer do you have to sacrifice personal information for convenience
  `;

  const searchDesc = `
  The Universal Clinician Directory. Search and find any U.S. physician, nurse
  practitioner or PA in seconds. Never Google another provider again.
  `;

  return (
    <div className="sm:mt-[5.75em] 2xl:mx-20 flex justify-center relative">
      <div className="sm:h-[840px] lg:h-[800px] overflow-hidden w-full 2xl:max-w-[76em] flex flex-col items-center border-b border-zinc-200 pb-16 sm:pb-0">
        <nav className="hidden sm:flex justify-center w-full">
          <ul className="flex justify-between gap-3 lg:w-[60%] 2xl:w-[65%]">
            {tabsNames.map((tabName, index) => (
              <li
                className="text-slate-700 px-4 py-2 rounded-2xl cursor-pointer antialiased select-none"
                onClick={() => {
                  const aux = new Array(4).fill(0);
                  aux[index] = 1;
                  setTabs(aux);
                }}
                style={
                  tabs[index] === 1
                    ? {
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "500",
                      }
                    : {}
                }
              >
                {tabName}
              </li>
            ))}
          </ul>
        </nav>
        {tabs[0] > 0 && (
          <DialerCard
            image={grandpa}
            icon={telemedicine}
            title="The easiest way to reach your patients face-to-face."
            desc={videoDesc}
            learnMore={true}
          />
        )}
        {tabs[1] > 0 && (
          <DialerCard
            image={phoneNums}
            icon={mobileDialer}
            title="Your solution to calling patients on-the-go."
            desc={voiceDesc}
            learnMore={false}
          />
        )}
        {tabs[2] > 0 && (
          <DialerCard
            image={search}
            icon={mobileSearch}
            title="Search, find, and reach any other healthcare provider, instantly"
            desc={searchDesc}
            learnMore={false}
          />
        )}
        {tabs[3] > 0 && (
          <DialerCard
            image={fax}
            icon={faxSvg}
            title="Fax without a fax machine."
            desc="Get a free mobile electronic fax number and send HIPAA-compliant fax seamlessly from wherever you are."
            learnMore={false}
          />
        )}
      </div>

      <div className="hidden sm:flex absolute left-2 2xl:left-10 top-1/2 cursor-pointer z-10">
        <GoChevronLeft
          size={48}
          className="text-slate-400"
          onClick={() => prev(tabs)}
        />
      </div>
      <div className="hidden sm:flex absolute right-2 2xl:right-10 top-1/2 cursor-pointer z-10">
        <GoChevronRight
          size={48}
          className="text-slate-400"
          onClick={() => next(tabs)}
        />
      </div>
    </div>
  );
};

export default Dialer;
