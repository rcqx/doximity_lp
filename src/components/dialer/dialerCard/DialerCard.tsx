import device from "../../../assets/device.png";
import Styles from "./dialerCard.tailwind";

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
    <div className={Styles.container}>
      <aside id="device" className={Styles.aside}>
        <img src={device} className={Styles.device} />
        <img src={image} className={Styles.image} />
      </aside>
      <section className={Styles.section}>
        <img src={icon} className={Styles.sectionImage} />
        <h1 className={Styles.title}>{title}</h1>
        <p className={Styles.desc}>{desc}</p>
        <div className={Styles.footer}>
          <button className={Styles.button}>Download App</button>
          {learnMore && <a className={Styles.a}>Learn More</a>}
        </div>
      </section>
    </div>
  );
};

export default DialerCard;
