import { Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image } from 'react-bootstrap'
import React from 'react';
import './components.css'
import img from '../data/img.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function About() {
    return (
        <>
            <Container className='section' id='about'>
                <Row className='resume-comp'>
                    <h3 class="mb-0">Shayan Monadjemi</h3>
                    <code>monadjemi [at] wustl [dot] edu</code>
                </Row>
                <Row className='resume-comp'>

                    <Col className='profile-img-container' lg={{span:4, order: 2}}>
                        <Row className='padding profile-img'>
                            <Image className='profile-img' src={img}></Image>
                        </Row>
                    </Col>

                    <Col className='padding' lg={{span:8, order: 1}}>
                            <p class="mb-5">I am a Ph.D. candidate in the <a href="http://visualdata.wustl.edu/" target="_blank">Visual Data Analysis Group</a> at Washington University in St. Louis. My research interests revolve around Visual Analytics and Machine Learning. My co-advisors are Drs. Alvitta Ottley and <a href="https://www.cse.wustl.edu/~garnett/" target="_blank">Roman Garnett</a>.</p>
                            <p class="mb-5">Before joining WashU, I attended the University of Texas in Dallas to study Computer Science with a minor in Mathematics.</p>

                            <a className='social' href="https://www.linkedin.com/in/shayanmonadjemi/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                            <a className='social' href="https://github.com/smonadjemi" target="_blank">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </a>

                            <a className='social' href="https://scholar.google.com/citations?user=OR02C9QAAAAJ&hl=en&oi=ao" target="_blank">
                                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                            </a>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default About;