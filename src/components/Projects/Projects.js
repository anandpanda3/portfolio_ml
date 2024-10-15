import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autodeploy from "../../Assets/Projects/autodeploy.png";
import bookmarker from "../../Assets/Projects/bookmarker.png";
import moneyapp from "../../Assets/Projects/moneyapp.png";
import imaginify from "../../Assets/Projects/imaginify.png";
import sumz from "../../Assets/Projects/sumz.png";
import evently from "../../Assets/Projects/evently.png";

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
              imgPath={imaginify}
              isBlog={false}
              title="Imaginify"
              description="Built an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal."
              ghLink="https://github.com/anandpanda3/imaginify_saas_app"
              demoLink="https://imaginify-self.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evently}
              isBlog={false}
              title="Evently"
              description="Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events."
              ghLink="https://github.com/anandpanda3/Evently"
              demoLink="https://evently-yy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moneyapp}
              isBlog={false}
              title="Moneyapp"
              description="ersonal Finance Tracker A full-stack web application for managing personal finances. Built with Django REST Framework backend and React frontend, MoneyApp allows users to track income and expenses, categorize transactions, and visualize financial data."
              ghLink="https://github.com/anandpanda3/Moneyapp"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autodeploy}
              isBlog={false}
              title="AutoDeploy: Automating Spring Boot and React Build & Publish"
              description="Automate building and publishing a Spring Boot backend and React frontend package to GitHub’s npm registry using GitHub Actions. Tech Stack : Python, GitHub Actions, Spring Boot, React, Node.js"
              ghLink="https://github.com/anandpanda3/Fullstack-Openai-Generator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sumz}
              isBlog={false}
              title="Sumz"
              description="The Sumz Article Summarizer is a web application built to quickly extract concise summaries from lengthy articles. The application integrates with OpenAI's GPT API to ensure highly accurate and relevant summarization. The project is developed using React.js for the frontend, with features focused on simplicity and functionality, demonstrating skills in RESTful API consumption and state management."
              ghLink="https://github.com/anandpanda3/sumz_article_summarizer"
              demoLink="https://sumz-article-summarizer-gold.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookmarker}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="he YT-Bookmarker is a browser extension designed to help users bookmark and manage specific moments in YouTube videos. It allows users to save timestamps and add notes for easy reference, making it perfect for students, professionals, or content creators who want to revisit specific parts of videos. "
              ghLink="https://github.com/anandpanda3/YT-Bookmarker"
              demoLink="https://chromewebstore.google.com/detail/youtube-bookmarker/peohjdmkchbdleoobfpfjifdeocagafc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
