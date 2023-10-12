import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'


function About() {
    return (
        <>
            <Container className='section' id='about'>

                <Row className='resume-comp'>
                    <h3 class="mb-0">About</h3>
                </Row>

                <Row className='resume-comp resume-comp-content'>

                    <p class="mb-5">I completed my PhD in 2023 as a member of the <a href="http://visualdata.wustl.edu/"
                                                                             target="_blank">Visual Interface and
                        Behavior Exploration (VIBE) Lab</a> at Washington University in St. Louis under the supervision of
                        Drs. <a href={'https://engineering.wustl.edu/faculty/Alvitta-Ottley.html'} target={'_blank'}>Alvitta
                            Ottley</a> and <a href="https://www.cse.wustl.edu/~garnett/" target="_blank">Roman
                            Garnett</a>.
                        While in graduate school, I worked with the <a
                            href="https://www.nasa.gov/intelligent-systems-division" target="_blank"> Intelligent
                            Systems Division </a> at NASA Ames Research Center as a pathways intern.
                        I received a BS in Computer Science with a minor in Mathematics from the University of Texas at
                        Dallas in 2018.</p>

                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default About;