import quote from "../../assets/quote-mark.svg";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-[34px]">The reviews are in</h1>
      <p>
        Here's what doctors, nurse practitioners, physician assistants and
        pharmacists are saying about Doximity.
      </p>
      <img src={quote} alt="a-quote-sign" className="w-[30px]" />
      <blockquote>
        I transferred a patient to another hospital several years ago and was
        able to quickly fax and send patient info via the Doximity app to my
        former medical school classmate who was working at the other hospital.
        It was 3am and the patient was admitted directly to the ICU. It was
        fantastically smooth and saved us so much time rather than having to
        traditionally fax medical records and information. Every little bit of
        time helps.
      </blockquote>
      <p>-Gavin Harris, Internal Medicine</p>
    </div>
  );
};

export default Reviews;
