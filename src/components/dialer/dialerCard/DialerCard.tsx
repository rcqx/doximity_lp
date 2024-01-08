import device from "../../../assets/device.png";

type DialerCardProps = {
  image: string;
  icon: string;
  title: string;
  desc: string;
  learnMore: boolean;
};

const DialerCard = ({
  image,
  icon,
  title,
  desc,
  learnMore,
}: DialerCardProps) => {
  return (
    <div className="w-[70%] h-full flex md:gap-20 flex-col lg:flex-row items-center border border-green-600">
      <aside
        id="device"
        className="mt-6 w-[35%] min-w-[300px] flex items-start lg:items-center ml-4 relative h-[23.75em] lg:h-[595px] max-h-[595px] overflow-hidden lg:overflow-visible"
      >
        <img src={device} className="absolute lg:h-full" />
        <img
          src={image}
          className="ml-[1.04em] mt-[0.15em] lg:h-[95.5%] absolute top-3 -z-10"
        />
      </aside>
      <section className="flex-1 flex flex-col justify-center gap-5 min-w-[455px] items-center lg:items-start">
        <img src={icon} className="w-[120px] hidden lg:flex" />
        <h1 className="font-bold text-[1.9em] leading-10">{title}</h1>
        <p className="antialised leading-6">{desc}</p>
        <div className="flex items-center gap-10 mt-6">
          <button className="w-fit px-6 py-4 bg-[#1276D3] mt-4 sm:mt-0 text-white rounded-md outline-black font-semibold">
            Download App
          </button>
          {learnMore && (
            <a className="text-slate-800 cursor-pointer underline">
              Learn More
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default DialerCard;
