import connect from "../../assets/clinicians-network.svg";
import careers from "../../assets/careers.svg";
import news from "../../assets/newsfeed.svg";
import messages from "../../assets/mobile-ftue-secure-message.svg";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/google-play.svg";

const Network = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[127px] gap-20">
      <h1 className="text-[32px] font-bold tracking-wide text-center">
        The Professional Medical Network for Physicians
      </h1>
      <div className="flex gap-5 max-w-7xl flex-col sm:flex-row">
        <div className="flex-1 h-[263px] flex flex-col items-center justify-center gap-4">
          <img
            src={connect}
            alt="clinicians-picture"
            className="w-[125px] h-[125px]"
          />
          <h2 className="font-[600] text-[24px]">Connect</h2>
          <span className="text-center">
            Stay connected with colleagues, classmates and co-residents
          </span>
        </div>
        <div className="flex-1 h-[263px] flex flex-col items-center justify-center gap-4">
          <img
            src={careers}
            alt="careers-picture"
            className="w-[125px] h-[125px]"
          />
          <h2 className="font-[600] text-[24px]">Careers</h2>
          <span className="text-center">
            Network with colleagues and employers at leading hospitals
          </span>
        </div>
        <div className="flex-1 h-[263px] flex flex-col items-center justify-center gap-4">
          <img src={news} alt="news-picture" className="w-[125px] h-[125px]" />
          <h2 className="font-[600] text-[24px]">News</h2>
          <span className="text-center">
            Stay on top of the latest medical news.
          </span>
        </div>
        <div className="flex-1 h-[263px] flex flex-col items-center justify-center gap-4">
          <img
            src={messages}
            alt="clinicians-picture"
            className="w-[89.64px] h-[125px]"
          />
          <h2 className="font-[600] text-[24px]">Secure Messaging</h2>
          <span className="text-center">
            Send HIPAA-compliant messages to your colleagues.
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center gap-5">
        <img src={appstore} alt="appstore" className="w-[150px] h-[44px]" />
        <img src={playstore} alt="appstore" className="w-[150px] h-[44px]" />
      </div>
    </div>
  );
};

export default Network;
