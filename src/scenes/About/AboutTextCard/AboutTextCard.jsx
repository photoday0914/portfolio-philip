import s from "./AboutTextCard.module.scss";

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am{" "}
        <span className={s.purple}> Philip Gradinetti. </span>
        <br />
        Skilled Full Stack Developer.
        <br />
        <br /> Bachelor's Degree in Computer Science        
        <br />
      </p>
    </div>
  );
};

export default AboutTextCard;
