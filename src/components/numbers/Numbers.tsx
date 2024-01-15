import nurse from "../../assets/nurse.webp";
import "./numbers.css";
import Styles from "./numbers.tailwind";

const Numbers = () => {
  return (
    <div id="numbers" className={Styles.wrapper}>
      <div id="numbers-layer" className={Styles.layer} />
      <header className={Styles.header}>
        <h1 className={Styles.title}>Doximity by the numbers</h1>
        <p className={Styles.description}>
          Our vision is a future where medical communication is effortless —
          fast, simple, seamless and secure.
        </p>
      </header>

      <div className={Styles.contentContainer}>
        <div className="flex-1">
          <h2 className={Styles.contentSubtitle}>Millions of Calls</h2>
          <p className={Styles.contentText}>
            Our users love Dialer. Doximity allows you to call patients using
            your cell phone, while displaying your office number. Call patients
            privately, without *67.
          </p>
        </div>
        <div className="flex-1">
          <h2 className={Styles.contentSubtitle}> 80% of Doctors</h2>
          <p className={Styles.contentText}>
            And 50% of all NPs and physician assistants as verified members.
          </p>
        </div>
        <div className="flex-1">
          <h2 className={Styles.contentSubtitle}> #1 for Clinicians</h2>
          <p className={Styles.contentText}>
            Aside from the iPhone, there&apos;s never been a piece of technology
            adopted by clinicians as quickly as Doximity.
          </p>
        </div>
      </div>
      <img src={nurse} alt="a-nurse-image" className={Styles.nurseImage} />
    </div>
  );
};

export default Numbers;
