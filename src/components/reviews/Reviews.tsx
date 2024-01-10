import { useState } from "react";
import quote from "../../assets/quote-mark.svg";

const Reviews = () => {
  const [selected, setSelected] = useState([1, 0, 0]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-11 relative">
      <div>
        <h1 className="text-[30px] font-bold text-center">
          The reviews are in
        </h1>
        <p className="text-[17px] my-[17px]">
          Here's what doctors, nurse practitioners, physician assistants and
          pharmacists are saying about Doximity.
        </p>
      </div>
      <img src={quote} alt="a-quote-sign" className="w-[30px]" />
      {selected[0] > 0 && (
        <>
          <blockquote className="text-[24px] w-1/2 text-center tracking-tight leading-8">
            I transferred a patient to another hospital several years ago and
            was able to quickly fax and send patient info via the Doximity app
            to my former medical school classmate who was working at the other
            hospital. It was 3am and the patient was admitted directly to the
            ICU. It was fantastically smooth and saved us so much time rather
            than having to traditionally fax medical records and information.
            Every little bit of time helps.
          </blockquote>
          <p className="text-[24px] italic">-Gavin Harris, Internal Medicine</p>
        </>
      )}

      {selected[1] > 0 && (
        <div
          className={`flex flex-col items-center transition-all duration-500 ease-out`}
        >
          <blockquote className="text-[24px] w-1/2 text-center tracking-tight leading-8">
            I frequently consult my colleagues in different specialties using
            the Doximity app. I frequently utilize Doximity to access articles
            for teaching rounds as well as sharing articles with my colleagues.
            It allows me to multi-task and take care of patients while not being
            confined to a desk.
          </blockquote>
          <p className="text-[24px] italic">- Doximity App Store Review</p>
        </div>
      )}

      {selected[2] > 0 && (
        <>
          <blockquote className="text-[24px] w-1/2 text-center tracking-tight leading-8">
            I use this application on a daily basis. I use the Doximity dialer
            to call patients from my personal phone so that my personal number
            doesn't show up on their caller ID. Nothing but praise. Thanks,
            Doximity!
          </blockquote>
          <p className="text-[24px] italic">
            - Christopher John Varughese, Cardiology
          </p>
        </>
      )}

      <div className="flex gap-10 absolute bottom-24">
        <div
          className="w-4 h-4 bg-slate-200 rounded-full cursor-pointer"
          style={selected[0] ? { backgroundColor: "black" } : {}}
          onClick={() => setSelected([1, 0, 0])}
        />
        <div
          className="w-4 h-4 bg-slate-200 rounded-full cursor-pointer"
          style={selected[1] ? { backgroundColor: "black" } : {}}
          onClick={() => setSelected([0, 1, 0])}
        />
        <div
          className="w-4 h-4 bg-slate-200 rounded-full cursor-pointer"
          style={selected[2] ? { backgroundColor: "black" } : {}}
          onClick={() => setSelected([0, 0, 1])}
        />
      </div>
    </div>
  );
};

export default Reviews;
