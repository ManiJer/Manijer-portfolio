import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rcnews from "../../Assets/Projects/rcnews.png";
import rcstudhandbook from "../../Assets/Projects/rcstudhandbook.png";
import arc from "../../Assets/Projects/arc.png";
import rocind from "../../Assets/Projects/rocind.png";
import rocport from "../../Assets/Projects/rocport.png";
import ecomm from "../../Assets/Projects/ecomm.png";

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
              imgPath={rcstudhandbook}
              isBlog={false}
              title="RC Student Handbook Admin Website"
              description="This is the Figma design of the Admin website used for the Rogationist College Mobile Handbook to manage contents and accounts of students."
              ghLink="https://github.com/ManiJer"
              demoLink="https://www.figma.com/design/rhV6PStNihSoU0qz5LucIr/RC-Handbook-Admin-Website?m=auto&t=Nwk4Gq9pWwON45Lh-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arc}
              isBlog={false}
              title="Arc.re"
              description="This is the Figma design of the Arc.re is a cloud archive that keeps the content of research papers. It’s mission is to help users keep and share their ideas, research and more. "
              ghLink="https://github.com/ManiJer"
              demoLink="https://www.figma.com/design/3hUrQn8REtaMVPwrtVW6HZ/archive?node-id=0-1&t=Nwk4Gq9pWwON45Lh-1"
            />
          </Col>

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
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocind}
              isBlog={false}
              title="ROC Industries Page"
              description="This is one of the proposed Figma design for the ROC Industries page of ROC.PH during my internship"
              ghLink="https://github.com/ManiJer"
              demoLink="https://www.figma.com/design/GnoDvREW56WGjnQjy2dGce/ROC-Industries?t=Nwk4Gq9pWwON45Lh-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocport}
              isBlog={false}
              title="ROC Portfolio Page"
              description="This is one of the proposed Figma design for the ROC Portfolio page of ROC.PH during my internship"
              ghLink="https://github.com/ManiJer"
              demoLink="https://www.figma.com/design/xbDCFn1JKXqlEFctVS2rIc/ROC-Portfolio?m=auto&t=Nwk4Gq9pWwON45Lh-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="E-Commerce Design"
              description="This is a sample of E-commerce Home page design"
              ghLink="https://github.com/ManiJer"
              demoLink="https://www.figma.com/design/rq5TO9tQmso5W6KCT5tQvt/Ecommerce-Design?node-id=0-1&t=j3WvILYfY4wgSmhU-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
