import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jericko B. Manimtim </span>
            from <span className="purple"> Amadeo, Cavite.</span>
            <br />
            I am a Graduate of Bachelor of Science in Information Technology.
            <br />
            I am a Junior Web Developer using ReactJS.
            <br />
            I am also an aspiring Automation engineer and Quality Assurance engineer.
            <br />
            I am a UI/UX aspirant
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Troubleshooting
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "It&#180;s not a bug; it&#180;s an undocumented feature."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experience is the name everyone gives to their mistakes."{" "}
          </p>
          <footer className="blockquote-footer">Oscar Wilde</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
