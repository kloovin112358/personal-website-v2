import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useRef, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Particles from "react-tsparticles";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import Accordion from 'react-bootstrap/Accordion';



function App() {

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          // interactivity: {
          //   detect_on: "canvas",
          //   modes: {
          //     attract: { distance: 200, duration: 0.4, factor: 5 }
          //   }
          // },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 15,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 10,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="topContainer">
      <div className="container text-white">
        <div className="pb-5">
          <Fade left><p className="display-6 mt-5">hey,</p></Fade>
          <Fade left delay={750}><p className="display-6">what's going on, bud?</p></Fade>
          <Fade left delay={2000}><br></br><br></br><br></br><p className="display-6">my name is</p></Fade>
          <p className="display-0 fw-bolder text-white">
            <Fade left delay={2900}>
              <Pulse forever duration={7000}>Kevin Lauer</Pulse>
            </Fade>
          </p>
          <Fade top delay={4500}><Jump forever delay={5500}><br></br><p className="display-5"><i className="bi bi-arrow-down-circle"></i></p></Jump></Fade>
          {/* <Fade left delay={3500}><p className="display-6 badgeParagraph">
            and boy do I have the opportunity for you!
            i created a
            <Roll delay={4000}><span className="badge bg-warning mx-2">blockchain</span></Roll>
            <Roll delay={4500}><span className="badge bg-danger mx-2">machine-learning</span></Roll>
            <Roll delay={5000}><span className="badge bg-success mx-2">sustainable energy</span></Roll>
            <Roll delay={5500}><span className="badge bg-secondary mx-2">artificial intelligence</span></Roll>
            <Roll delay={6000}><span className="badge bg-danger mx-2">bitcoin</span></Roll>
            <Roll delay={6500}><span className="badge bg-warning mx-2">microtransaction</span></Roll>
            <Roll delay={7000}><span className="badge bg-dark mx-2">real-estate</span></Roll>
            <Roll delay={7500}><span className="badge bg-secondary mx-2">course</span></Roll>
          </p></Fade> */}
        </div>
      </div>
      </div>
      <div className="bg-secondary">
        <div className="container text-white">
        <div className="py-5">
          <Fade bottom cascade>
          <p className="display-1 fw-bold mt-5">i'm a full-stack software engineer</p>
          <p className="display-4">so essentially i google things all day</p>
          </Fade>
          <Fade bottom cascade>
            <br></br><br></br><br></br><p className="display-1 fw-bold">i'm still in college</p>
            <p className="display-4">but i'm graduating in december of 2022</p>
          </Fade>
          <Fade bottom cascade>
            <br></br><br></br><br></br><p className="display-1 fw-bold">so... hire me?</p>
            <p className="display-4">no pressure, only if <i>you</i> want to</p>
          </Fade>
        </div>
        </div>
      </div>
      <div className="bg-success">
        <div className="container text-white">
          <div className="py-5">
          <Fade bottom cascade>
            <p className="display-3 fw-bold mt-5">here's what i can do</p>
            <Accordion className="text-dark" defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Programming Languages</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                  <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Python</div>
                        <span className="badge bg-primary rounded-pill">August 2019</span>
                      </div>
                    </li>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>JavaScript</div>
                        <span className="badge bg-secondary rounded-pill">September 2020</span>
                      </div>
                    </li>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Java</div>
                        <span className="badge bg-danger rounded-pill">August 2021</span>
                      </div>
                    </li>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Excel VBA</div>
                        <span className="badge bg-warning rounded-pill">January 2020</span>
                      </div>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Web</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                  <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Backend:</span> <span className="badge bg-primary rounded-pill">Django</span> <span className="badge bg-danger rounded-pill">Django REST Framework</span> <span className="badge bg-danger rounded-pill">Flask</span> <span className="badge bg-danger rounded-pill">Node.JS</span> <span className="badge bg-danger rounded-pill">Spring Boot</span> <span className="badge bg-danger rounded-pill">ASP.NET</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Frontend:</span> <span className="badge bg-primary rounded-pill">React</span> <span className="badge bg-primary rounded-pill">HTML</span> <span className="badge bg-primary rounded-pill">CSS</span> <span className="badge bg-primary rounded-pill">SASS</span> <span className="badge bg-primary rounded-pill">Bootstrap</span> <span className="badge bg-primary rounded-pill">JQuery</span> <span className="badge bg-primary rounded-pill">AJAX</span> <span className="badge bg-primary rounded-pill">Chart.JS</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Miscellaneous:</span> <span className="badge bg-primary rounded-pill">Heroku</span> <span className="badge bg-primary rounded-pill">Apache</span> <span className="badge bg-primary rounded-pill">REST APIs</span> <span className="badge bg-primary rounded-pill">WebSockets</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Data</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                  <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Databases:</span> <span className="badge bg-primary rounded-pill">PostgreSQL</span> <span className="badge bg-primary rounded-pill">Access</span> <span className="badge bg-primary rounded-pill">Snowflake</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Tools:</span> <span className="badge bg-primary rounded-pill">SQL</span> <span className="badge bg-primary rounded-pill">Excel</span> <span className="badge bg-primary rounded-pill">PowerBI</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Other Software</Accordion.Header>
                <Accordion.Body>
                  
                <div className='lead'>
                  <span className="badge bg-primary rounded-pill">Git</span> <span className="badge bg-primary rounded-pill">GitHub</span> <span className="badge bg-primary rounded-pill">Azure DevOps</span> <span className="badge bg-primary rounded-pill">Selenium</span> <span className="badge bg-primary rounded-pill">Minitab</span> <span className="badge bg-primary rounded-pill">Simio</span> <span className="badge bg-primary rounded-pill">Creo</span> <span className="badge bg-primary rounded-pill">Solidworks</span> <span className="badge bg-primary rounded-pill">AutoDesk Inventor</span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Fade>
          </div>
          
          </div>
        </div>
    </>
  );
}

export default App;
