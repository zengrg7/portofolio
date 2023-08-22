import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.PNG";
import pandora from "../../Assets/Projects/pandora.PNG";
import lakhey from "../../Assets/Projects/lakhey.PNG";


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
              imgPath={lakhey}
              isBlog={false}
              title="Lakhey"
              description="A clothing brand website built with ReactJS. The website showcases feaured items, contacts, about and shop section where user can view prices and details about the item."
              ghLink="https://github.com/zengrg7/lakhey/tree/main"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pandora}
              isBlog={false}
              title="Pandora"
              description="A Jewellry shop website created using ReactJS, Express and MaterialUI. Customer can sign in, sign up, contact the shop, buy product, manage them and make payments. "
              ghLink=""
              demoLink="https://pandora-web.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do"
              description="This is a simple To-Do list app built by using vanilla JavaScript, HTML5 and CSS3. User can add task, delete them and filter the task between completed and not completed."
              ghLink="https://github.com/zengrg7/todo"
              demoLink="https://bijen-todo.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
