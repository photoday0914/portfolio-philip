import s from "./Contact.module.scss";
import { ReactComponent as FilesIcon } from "../../assets/contact-us.svg";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
// import Button from "../../components/UIElements/Button/Button";
import EmailManager from "./EmailManager";

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <div>
            <p className={s.title}>Contact Me</p>
            <br />
            
            <p className={s.smallText} style={{textAlign:"left"}}>
              You can message me, I will reply within 24 hours.
              <br/>
              I can help you with React, AWS, Golang, NodeJS, Python, CI/CD, etc.
            </p>
            <br />
            {/* <br /> */}
            {/* <p className={s.smallText} style={{textAlign:"left"}}>PHONE NUMBER : +1 (669) 232-0529</p> */}
            <br />      
            <p className={s.smallText} style={{textAlign:"left"}}>EMAIL ID : philipjohngra@outlook.com</p>
            <br />
            <div>
              <p className={s.smallText} style={{textAlign:"left"}}>LOCATION : Remote</p>
            </div>
          </div>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <br />
        <br />
      </div>
      <EmailManager style={{ margin: "auto" }} />
    </BaseLayout>
  );
};

export default Resume;
