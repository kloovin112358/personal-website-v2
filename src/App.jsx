import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useRef, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Particles from "react-tsparticles";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
              value: 0.15,
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
          <Fade top delay={4500}><Jump forever delay={6500}><br></br><p className="display-5"><i className="bi bi-arrow-down-circle"></i></p></Jump></Fade>
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
          <p className="display-4 text-success">so essentially i google things all day</p>
          </Fade>
          <Fade bottom cascade>
            <br></br><br></br><br></br><p className="display-1 fw-bold">i'm still in college</p>
            <p className="display-4 text-success">but i'm graduating in december of 2022</p>
          </Fade>
          <Fade bottom cascade>
            <br></br><br></br><br></br><p className="display-1 fw-bold">so... hire me?</p>
            <p className="display-4 text-success mb-5">no pressure, only if <i>you</i> want to</p>
          </Fade>
        </div>
        </div>
      </div>
      <div className="bg-success">
        <div className="container text-white">
          <div className="py-5">
          <Fade bottom cascade>
            <p className="display-3 fw-bold mt-5 mb-4">here's what i can do</p>
            <Accordion className="text-dark mb-5" defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Programming Languages</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                  <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Python</div>
                        <span className="badge bg-success rounded-pill">August 2019</span>
                      </div>
                    </li>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>JavaScript</div>
                        <span className="badge bg-success rounded-pill">September 2020</span>
                      </div>
                    </li>
                    <li className='list-group-item'>
                      <div className='d-flex w-100 justify-content-between'>
                        <div className='fw-bold'>Java</div>
                        <span className="badge bg-primary rounded-pill">August 2021</span>
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
                      <span className='fw-bold'>Backend:</span> <span className="badge bg-success rounded-pill">Django</span> <span className="badge bg-warning rounded-pill">Django REST Framework</span> <span className="badge bg-success rounded-pill">Flask</span> <span className="badge bg-primary rounded-pill">Node.JS</span> <span className="badge bg-danger rounded-pill">Spring Boot</span> <span className="badge bg-danger rounded-pill">ASP.NET</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Frontend:</span> <span className="badge bg-success rounded-pill">React</span> <span className="badge bg-success rounded-pill">HTML</span> <span className="badge bg-success rounded-pill">CSS</span> <span className="badge bg-warning rounded-pill">SASS</span> <span className="badge bg-success rounded-pill">Bootstrap</span> <span className="badge bg-success rounded-pill">JQuery</span> <span className="badge bg-success rounded-pill">AJAX</span> <span className="badge bg-danger rounded-pill">Chart.JS</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Miscellaneous:</span> <span className="badge bg-primary rounded-pill">Heroku</span> <span className="badge bg-danger rounded-pill">Apache</span> <span className="badge bg-warning rounded-pill">REST APIs</span> <span className="badge bg-warning rounded-pill">WebSockets</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Data</Accordion.Header>
                <Accordion.Body bsPrefix={"accordionReset"}>
                  <ul className='list-group list-group-flush lead'>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Databases:</span> <span className="badge bg-success rounded-pill">PostgreSQL</span> <span className="badge bg-warning rounded-pill">Access</span> <span className="badge bg-warning rounded-pill">Snowflake</span>
                    </li>
                    <li className='list-group-item'>
                      <span className='fw-bold'>Tools:</span> <span className="badge bg-warning rounded-pill">SQL</span> <span className="badge bg-primary rounded-pill">Excel</span> <span className="badge bg-warning rounded-pill">PowerBI</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Other Software</Accordion.Header>
                <Accordion.Body>
                  
                <div className='lead'>
                  <span className="badge bg-primary rounded-pill">Git</span> <span className="badge bg-primary rounded-pill">GitHub</span> <span className="badge bg-success rounded-pill">Azure DevOps</span> <span className="badge bg-primary rounded-pill">Selenium</span> <span className="badge bg-danger rounded-pill">Minitab</span> <span className="badge bg-danger rounded-pill">Simio</span> <span className="badge bg-primary rounded-pill">Creo</span> <span className="badge bg-danger rounded-pill">Solidworks</span> <span className="badge bg-warning rounded-pill">AutoDesk Inventor</span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Fade>
          </div>
          
          </div>
        </div>
        <div className="bg-warning">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom>
              <p className="display-3 fw-bold mt-5">here's where i worked</p>
              <VerticalTimeline className="mt-5" layout={'1-column-left'}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#7209b7', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #7209b7' }}
                  date="May 2022 - August 2022"
                  iconStyle={{ background: '#7209b7', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Software Development Intern, Web</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2"><strong className="text-danger">Uline</strong> | Pleasant Prairie, WI</h4>
                  <p>
                    Offer accepted, starting in late May.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#3a0ca3', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #3a0ca3' }}
                  date="December 2020 - May 2022"
                  iconStyle={{ background: '#3a0ca3', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Web Developer</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2"><strong className="text-danger">Caterpillar</strong> | East Peoria, IL</h4>
                  <p>
                    TODO
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#4cc9f0', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #4cc9f0' }}
                  date="October 2020 - December 2020"
                  iconStyle={{ background: '#4cc9f0', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Data Analytics Intern</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2"><strong className="text-secondary">Caterpillar</strong> | Morton, IL</h4>
                  <p>
                    TODO
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#7209b7', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #7209b7' }}
                  date="March 2020 - October 2020"
                  iconStyle={{ background: '#7209b7', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Industrial Engineering Intern</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2"><strong className="text-danger">Synergetic Industries</strong> | Morton, IL</h4>
                  <p>
                    TODO
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom>
            <p className="display-3 fw-bold mt-5">here are some sites i made</p>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom>
            <p className="display-3 fw-bold mt-5">here are some other things i did</p>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-success">
          <div className="container">
            <div className="py-5">
            <Fade bottom cascade>
            <p className="display-3 fw-bold mt-5 mb-4 text-white">here's where i went to school</p>
            <div className="row pb-5">
                <div class='col-md mb-md-0 mb-3'>
                  <Card>
                    <Card.Header>
                    <div class='d-flex w-100 justify-content-between'>
                      <h3>Bradley University</h3>
                      <span class='lead'>2019 - 2022</span>
                    </div>
                    </Card.Header>
                    <Card.Body className="lead">
                    <span className="fw-bold">Degree</span>: Bachelor's of Science in Industrial Engineering, Supply Chain Analytics Concentration <u>(ABET Accredited)</u>
                    <br></br><br></br>
                    <span className="fw-bold">Organizations</span>: Disc Golf Club (president), Symphonic Orchestra, Symphonic Winds, Basketball Band, Table Tennis Club, Tennis Club
                    <br></br><br></br>
                    <span className="fw-bold">GPA</span>: 3.92
                    </Card.Body>
                  </Card>
                </div>
                <div class='col-md'>
                  <Card>
                    <Card.Header>
                    <div class='d-flex w-100 justify-content-between'>
                      <h3>Morton High School</h3>
                      <span class='lead'>2015 - 2019</span>
                    </div>
                    </Card.Header>
                    <Card.Body className="lead">
                      It wasn't as dramatic as the movies.
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom cascade>
              <p className="display-3 fw-bold mt-5">send me a fax</p>
              <p className="display-6 mt-5">
                <i class="bi bi-envelope-fill"></i> <a className="text-white" href='mailto:kevin.lauer2019@gmail.com'>kevin.lauer2019@gmail.com</a>
              </p>
              <p className="display-6 mt-2">
                <i class="bi bi-linkedin"></i> <a className="text-white" href='https://www.linkedin.com/in/ktlauer/'>ktlauer</a>
              </p>
              <p className="display-6 mt-2 pb-5">
                <i class="bi bi-github"></i> <a className="text-white" href='https://github.com/kloovin112358'>kloovin112358</a>
              </p>
            </Fade>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
