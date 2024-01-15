import connect from "../../assets/clinicians-network.svg";
import careers from "../../assets/careers.svg";
import news from "../../assets/newsfeed.svg";
import messages from "../../assets/mobile-ftue-secure-message.svg";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/google-play.svg";
import Styles from "./network.tailwind";

const Network = () => {
  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.title}>
        The Professional Medical Network for Physicians
      </h1>
      <div className={Styles.sectionContainer}>
        <div className={Styles.section}>
          <img
            src={connect}
            alt="clinicians-picture"
            className={Styles.image}
          />
          <h2 className={Styles.heading}>Connect</h2>
          <span className={Styles.description}>
            Stay connected with colleagues, classmates and co-residents
          </span>
        </div>
        <div className={Styles.section}>
          <img src={careers} alt="careers-picture" className={Styles.image} />
          <h2 className={Styles.heading}>Careers</h2>
          <span className="text-center">
            Network with colleagues and employers at leading hospitals
          </span>
        </div>
        <div className={Styles.section}>
          <img src={news} alt="news-picture" className={Styles.image} />
          <h2 className={Styles.heading}>News</h2>
          <span className="text-center">
            Stay on top of the latest medical news.
          </span>
        </div>
        <div className={Styles.section}>
          <img
            src={messages}
            alt="clinicians-picture"
            className="w-[89.64px] h-[125px]"
          />
          <h2 className={Styles.heading}>Secure Messaging</h2>
          <span className="text-center">
            Send HIPAA-compliant messages to your colleagues.
          </span>
        </div>
      </div>
      <div className={Styles.store}>
        <img src={appstore} alt="appstore" className={Styles.storeImages} />
        <img src={playstore} alt="appstore" className={Styles.storeImages} />
      </div>
    </div>
  );
};

export default Network;
