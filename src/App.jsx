import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useRef, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Particles from "react-tsparticles";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
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
              <p className="display-3 fw-bold mt-5">here's where i work(ed)</p>
              <VerticalTimeline className="mt-5 mb-5" layout={'1-column-left'}>
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
                    Offer accepted, starting in late May
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
                    <ul>
                      <li>Full-stack developer on internal website supporting 3 facilities</li>
                      <li>Developed 15+ tools such as metrology lab software, manufacturing quality checklist systems, inventory tracking system</li>
                      <li>Acted as programming lead of small team</li>
                    </ul>
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
                    <ul>
                      <li>Part-time intern on short-term data project</li>
                      <li>Sought to understand part demand on deprecated parts and how to support machines using them</li>
                      <li>Developed interactive Excel tool providing purchasing decision</li>
                    </ul>
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
                    <ul>
                      <li>Processing and automation engineer at an engineering contracting firm</li>
                      <li>Automated data entry and material pricing quotes, helped create quotes</li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container">
            <div className="py-5">
            <Fade bottom>
            <p className="display-3 fw-bold mt-5 text-white">here are some sites i made</p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="mt-5 align-items-stretch"> 
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column display-7">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Palabrio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Country Generator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Extension Quiz</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Chess Opening Roulette</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Company Template</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} className="bg-white rounded-3 p-4"> 
                  <Tab.Content className="display-7 text-secondary">
                    <Tab.Pane eventKey="first">
                      <p> 
                      My friend Emily Lucas and I created Palabrio, a small text-based party game. Think
                      low-budget Jackbox games. Neither of us had any web experience, but the idea sounded fun. So, through YouTube and StackOverflow, we scrapped it together. Built on Node.
                      </p><Button variant="danger" size="lg" href="http://www.palabr.io">Visit Site</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p> 
                    I wanted to learn some new front-end techniques, so I built this website. I learned some basic SASS for Bootstrap
              customization, added in some fun animations, and ensured it is completely responsive. Built on React.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p> 
                    I created a fun data visualization tool showing any person's chance of being born in a given country, generating countries based on actual population data. Built with Flask and some simple CSV math 
              served via AJAX, with data visualizations via Chart.JS.
                      </p><Button variant="danger" size="lg" href="https://country-generator.herokuapp.com/">Visit Site</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>
                      I made a small web app that tests your knowledge of file extensions. 
                      File extensions used courtesy of <a href='https://www.file-extensions.org/'>file-extensions.org</a>. Built on React.
                      </p><Button variant="danger" size="lg" href="https://extension-quiz.herokuapp.com/">Visit Site</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <p> 
                    This is a random generator for chess openings in order to make your games less boring. 
              Your moves are compared to an openings database, which gives you a real opening to play. Built on Flask and Flask SocketIO.
                      </p><Button variant="danger" size="lg" href="https://chess-opening-roulette.herokuapp.com/">Visit Site</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                    <p> 
                    I built a boilerplate company website template to work on my professional front-end design. 
              The site contains a few pages that every software company website seems to have. Built on ASP.NET with Razor Pages.
                      </p><Button variant="danger" size="lg" href="https://github.com/kloovin112358/company-sample">Visit Site</Button>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom>
            <p className="display-3 fw-bold mt-5">here are some other things i did</p>
            <div className='row mt-5'>
              <div className='col-md mb-md-0 mb-3'>
                <div className='card text-light bg-danger shadow-lg'>
                  <div className='card-header'>
                    <div className='d-flex w-100 justify-content-between'>
                      <h3>Google Code Jam</h3>
                      <span className='lead'>Mar. 2021 - Apr. 2021</span>
                    </div>
                  </div>
                  <div className='card-body lead'>
                    <a className='text-white' href='https://codingcompetitions.withgoogle.com/codejam'>Code Jam</a> is a worldwide programming competition put on by Google. Each round has a series
                    of programming puzzles to be solved in a short amount of time. After many hours of practice, I passed the qualification round and got stumped in the next. Those questions are hard.
                    <br></br><i>The competition made me a much better programmer, in terms of efficiency and coding basics.</i>
                  </div>
                </div>
              </div>
              <div className='col-md mb-md-0 mb-3'>
                <div className='card text-light bg-primary shadow-lg'>
                  <div className='card-header'>
                    <div className='d-flex w-100 justify-content-between'>
                      <h3>ASCM Case Competition</h3>
                      <span className='lead'>Oct. 2020 - Feb. 2021</span>
                    </div>
                  </div>
                  <div className='card-body lead'>
                    The <a className='text-success' href='https://www.ascm.org/'>Association for Supply Chain Management</a> puts on a yearly worldwide supply chain case competition.
                    In a team with 3 other students, I helped develop solutions for mock companies facing product quality and production issues. We competed in two rounds of the competition. 
                    <br></br><i>I learned how to put together solutions when faced with broad problems lacking a single answer.</i>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-md-4 mt-0'>
              <div className='col-md mb-md-0 mb-3'>
                <div className='card text-white bg-warning shadow-lg'>
                  <div className='card-header'>
                    <div className='d-flex w-100 justify-content-between'>
                      <h3>Bradley Disc Golf Club</h3>
                      <span className='lead'>July 2021 - Current</span>
                    </div>
                  </div>
                  <div className='card-body lead'>
                    I am currently the president of the Bradley University Disc Golf Club. During the season, I run a weekly league for our 15+ members as well as managing the competitive club sport team.
                    In October of 2021 I organized a collegiate disc golf tournament, <a className='text-danger' href='https://www.discgolfscene.com/tournaments/Brave_the_Midwest_Presented_by_Peoria_Frisbee_Club_2021'>Brave the Midwest</a>.
                    Over 50 players came from 4 states. I also organize away tournaments for the team, including trips to Ohio and Missouri, and the National Collegiate Championships in North Carolina. 
                    <br></br><i>I've learned how to navigate red tape, fill out the forms, ask for permission, and do things by the book. That, and I have learned how to be the person in charge.</i>
                  </div>
                </div>
              </div>
              <div className='col-md mb-md-0 mb-3'>
                <div className='card text-light bg-info shadow-lg'>
                  <div className='card-header'>
                    <div className='d-flex w-100 justify-content-between'>
                      <h3>Online Resale Business</h3>
                      <span className='lead'>May 2016 - Mar. 2020</span>
                    </div>
                  </div>
                  <div className='card-body lead'>
                    I had a small side-hustle during the summers in high school. I bought and sold various items from garage sales, estate sales, government auctions, and anywhere else. 
                    While it was a small operation, barely breaking 5 figures in revenue, I learned how to keep the books, take photos, create attractive listings, ship items, and 
                    most of all, keep customers happy. This was all done on my own, with no outside help. <br></br><i>I learned how to be meticulous and how to apologize for my mistakes.</i>
                  </div>
                </div>
              </div>
            </div>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-success">
          <div className="container">
            <div className="py-5">
            <Fade bottom cascade>
            <p className="display-3 fw-bold mt-5 mb-4 text-white">here's where i went to school</p>
            <VerticalTimeline className="mt-5" layout={'1-column-left'}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#4361ee', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #4361ee' }}
                  date="2019 - 2022"
                  iconStyle={{ background: '#4361ee', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Bradley University</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2">Peoria, IL</h4>
                  <p>
                  Bachelor's of Science in Industrial Engineering, Supply Chain Analytics Concentration <u>(ABET Accredited)</u>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work lead"
                  contentStyle={{ background: '#3a0ca3', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #3a0ca3' }}
                  date="2015 - 2019"
                  iconStyle={{ background: '#3a0ca3', color: '#fff' }}
                  // icon={<i className="bi bi-briefcase text-center"></i>}
                >
                  <h1 className="vertical-timeline-element-title"><strong>Morton High School</strong></h1>
                  <h4 className="vertical-timeline-element-subtitle mt-2">Morton, IL</h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Fade>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container text-white">
            <div className="py-5">
            <Fade bottom cascade>
              <p className="display-3 fw-bold mt-5">send me a fax</p>
              <p className="display-7 mt-5">
                <i className="bi bi-envelope-fill"></i> <a className="text-white" href='mailto:kevin.lauer2019@gmail.com'>kevin.lauer2019@gmail.com</a>
              </p>
              <p className="display-7 mt-2">
                <i className="bi bi-linkedin"></i> <a className="text-white" href='https://www.linkedin.com/in/ktlauer/'>ktlauer</a>
              </p>
              <p className="display-7 mt-2 pb-5">
                <i className="bi bi-github"></i> <a className="text-white" href='https://github.com/kloovin112358'>kloovin112358</a>
              </p>
            </Fade>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
