import { useState } from "react";
import quote from "../../assets/quote-mark.svg";
import Styles from "./reviews.tailwind";

const Reviews = () => {
  const [selected, setSelected] = useState([1, 0, 0]);
  const [review1, setReview1] = useState(true);
  const [review2, setReview2] = useState(false);
  const [review3, setReview3] = useState(false);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1 className={Styles.title}>The reviews are in</h1>
        <p className={Styles.desc}>
          Here's what doctors, nurse practitioners, physician assistants and
          pharmacists are saying about Doximity.
        </p>
      </div>
      <img src={quote} alt="a-quote-sign" className="w-[30px]" />
      {selected[0] > 0 && (
        <div className={Styles.review} style={review1 ? { opacity: "1" } : {}}>
          <blockquote className={Styles.quote}>
            I transferred a patient to another hospital several years ago and
            was able to quickly fax and send patient info via the Doximity app
            to my former medical school classmate who was working at the other
            hospital. It was 3am and the patient was admitted directly to the
            ICU. It was fantastically smooth and saved us so much time rather
            than having to traditionally fax medical records and information.
            Every little bit of time helps.
          </blockquote>
          <p className={Styles.firm}>- Gavin Harris, Internal Medicine</p>
        </div>
      )}

      {selected[1] > 0 && (
        <div className={Styles.review} style={review2 ? { opacity: "1" } : {}}>
          <blockquote className={Styles.quote}>
            I frequently consult my colleagues in different specialties using
            the Doximity app. I frequently utilize Doximity to access articles
            for teaching rounds as well as sharing articles with my colleagues.
            It allows me to multi-task and take care of patients while not being
            confined to a desk.
          </blockquote>
          <p className={Styles.firm}>- Doximity App Store Review</p>
        </div>
      )}

      {selected[2] > 0 && (
        <div className={Styles.review} style={review3 ? { opacity: "1" } : {}}>
          <blockquote className={Styles.quote}>
            I use this application on a daily basis. I use the Doximity dialer
            to call patients from my personal phone so that my personal number
            doesn't show up on their caller ID. Nothing but praise. Thanks,
            Doximity!
          </blockquote>
          <p className="text-base xl:text-[24px] italic">
            - Christopher John Varughese, Cardiology
          </p>
        </div>
      )}

      <div className={Styles.navContainer}>
        <div
          className={Styles.navItem}
          style={selected[0] ? { backgroundColor: "black" } : {}}
          onClick={() => {
            setSelected([1, 0, 0]);
            setTimeout(() => {
              setReview1(true);
              setReview2(false);
              setReview3(false);
            }, 100);
          }}
        />
        <div
          className={Styles.navItem}
          style={selected[1] ? { backgroundColor: "black" } : {}}
          onClick={() => {
            setSelected([0, 1, 0]);
            setTimeout(() => {
              setReview1(false);
              setReview2(true);
              setReview3(false);
            }, 100);
          }}
        />
        <div
          className={Styles.navItem}
          style={selected[2] ? { backgroundColor: "black" } : {}}
          onClick={() => {
            setSelected([0, 0, 1]);
            setTimeout(() => {
              setReview1(false);
              setReview2(false);
              setReview3(true);
            }, 100);
          }}
        />
      </div>
    </div>
  );
};

export default Reviews;
