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
    <div className="w-[70%] h-full flex gap-20">
      <aside
        id="device"
        className="mt-6 w-[35%] flex items-center ml-4 relative"
      >
        <img src={device} className="absolute" />
        <img src={image} className="w-[89%] ml-[1.03em] mt-[0.15em]" />
      </aside>
      <section className="flex-1 flex flex-col justify-center gap-5">
        <img src={icon} className="w-[120px]" />
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
