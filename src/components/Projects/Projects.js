import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rcnews from "../../Assets/Projects/rcnews.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rcnews}
              isBlog={false}
              title="RCNews"
              description="Welcome to RCNEWs, your go-to source for the latest and most comprehensive coverage of Rogationist College. RCNEWs brings you breaking news, in-depth reviews, and insightful articles on everything related to Rogationist College. Stay informed, connected, and engaged through our dynamic and informative platform."
              ghLink="https://github.com/ManiJer"
              demoLink="https://rogationist-student-news.netlify.app/"
            />
          </Col>
        
        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rcnews}
              isBlog={false}
              title="RCNews"
              description="Welcome to RCNEWs, your go-to source for the latest and most comprehensive coverage of Rogationist College. RCNEWs brings you breaking news, in-depth reviews, and insightful articles on everything related to Rogationist College. Stay informed, connected, and engaged through our dynamic and informative platform."
              ghLink="https://github.com/ManiJer"
              demoLink="https://rogationist-student-news.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
