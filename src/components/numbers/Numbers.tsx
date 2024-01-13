import nurse from "../../assets/nurse.webp";
import "./numbers.css";

const Numbers = () => {
  return (
    <div
      id="numbers"
      className="bg-[#E0DFDB] flex flex-col items-center gap-20 pt-[100px] pb-[100px] sm:pb-0 relative"
    >
      <div
        id="numbers-layer"
        className="w-full sm:h-[900px] lg:h-[750px] absolute top-0"
      />
      <header className="mx-20 flex flex-col gap-3 z-20">
        <h1 className="text-[22px] md:text-[32px] font-bold tracking-wide text-center">
          Doximity by the numbers
        </h1>
        <p className="text-center">
          Our vision is a future where medical communication is effortless —
          fast, simple, seamless and secure.
        </p>
      </header>

      <div className="flex gap-6 max-w-7xl flex-col md:flex-row mx-10 sm:mx-20 xl:mx-[190px] z-20">
        <div className="flex-1">
          <h2 className="text-[22px] md:text-[32px] font-[600] tracking-wide lg:leading-loose text-center sm:text-start">
            Millions of Calls
          </h2>
          <p className="sm:w-[90%] text-center sm:text-start text-[15px] sm:text-base">
            Our users love Dialer. Doximity allows you to call patients using
            your cell phone, while displaying your office number. Call patients
            privately, without *67.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-[22px] md:text-[32px] font-[600] tracking-wide lg:leading-loose text-center sm:text-start">
            80% of Doctors
          </h2>
          <p className="sm:w-[90%] text-center sm:text-start text-[15px] sm:text-base">
            And 50% of all NPs and physician assistants as verified members.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-[22px] md:text-[32px] font-[600] tracking-wide lg:leading-loose text-center sm:text-start">
            #1 for Clinicians
          </h2>
          <p className="sm:w-[90%] text-center sm:text-start text-[15px] sm:text-base">
            Aside from the iPhone, there&apos;s never been a piece of technology
            adopted by clinicians as quickly as Doximity.
          </p>
        </div>
      </div>
      <img src={nurse} alt="a-nurse-image" className="hidden sm:flex" />
    </div>
  );
};

export default Numbers;
