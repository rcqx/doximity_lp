import { useState } from "react";
import dialer1 from "../../assets/dialer1.webp";

const Dialer = () => {
  const [tabs, setTabs] = useState<number[]>([1, 0, 0, 0]);

  const tabsNames = ["Dialer Video", "Dialer Voice", "Search", "Fax"];

  return (
    <div className="mt-[5.75em] mx-20 flex justify-center">
      <div className="h-[500px] overflow-hidden w-full max-w-[76em]">
        <nav className="flex justify-center">
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
        {/* <div className="h-full">
          <aside className="flex h-full w-1/2 border border-green-600">
            <img src={dialer1} alt="dialer-example-image" className="h-fit" />
          </aside>
        </div> */}
      </div>
    </div>
  );
};

export default Dialer;
