import device from "../../../assets/device.png";
import grandpa from "../../../assets/dialer1.webp";
import telemedicine from "../../../assets/telemedicine.svg";

const DialerVideo = () => {
  return (
    <div className="w-[70%] h-full flex gap-20">
      <aside
        id="device"
        className="mt-6 w-[35%] flex items-center ml-4 relative"
      >
        <img src={device} className="absolute" />
        <img src={grandpa} className="w-[89%] ml-[1.03em] mt-[0.15em]" />
      </aside>
      <section className="flex-1 flex flex-col justify-center gap-5">
        <img src={telemedicine} className="w-[120px]" />
        <h1 className="font-bold text-[1.9em] leading-10">
          The easiest way to reach your patients face-to-face.
        </h1>
        <p className="antialised leading-6">
          Dialer Video connects you to your patient through a no-reply text
          message. Your cell number is kept private — you designate the callback
          number. And it works with any smartphone. Your patient does not need
          to download an app or create an account. With a simple tap,
          you&apos;re practicing telemedicine.
        </p>
        <div className="flex items-center gap-10 mt-6">
          <button className="w-fit px-6 py-4 bg-[#1276D3] mt-4 sm:mt-0 text-white rounded-md outline-black font-semibold">
            Download App
          </button>
          <a className="text-slate-800 cursor-pointer underline">Learn More</a>
        </div>
      </section>
    </div>
  );
};

export default DialerVideo;
