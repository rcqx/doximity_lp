import { useState } from "react";
import DialerVideo from "./dialerVideo/DialerVideo";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import "./dialer.css";

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

  return (
    <div className="mt-[5.75em] mx-20 flex justify-center relative">
      <div className="h-[720px] overflow-hidden w-full max-w-[76em] flex flex-col items-center">
        <nav className="flex justify-center w-full">
          <ul className="flex justify-between w-[65%]">
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
        {tabs[0] > 0 && <DialerVideo />}
      </div>
      <div className="absolute left-10 top-1/2 cursor-pointer">
        <GoChevronLeft
          size={48}
          className="text-slate-400"
          onClick={() => prev(tabs)}
        />
      </div>
      <div className="absolute right-10 top-1/2 cursor-pointer">
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
