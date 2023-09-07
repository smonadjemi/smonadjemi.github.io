import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import img from '../data/img.JPG'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <>
            <Container className='section' id='home'>
                <Row className='resume-comp'>

                    <Col className='profile-img-container' lg={{span: 5, order: 2}}>
                        <Row className='padding profile-img'>
                            <Image className='profile-img' src={img}></Image>
                        </Row>
                    </Col>

                    <Col className='padding' lg={{span: 7, order: 1}}>
                        <p className="about-line name">Shayan Monadjemi</p>
                        <code className="about-line email">monadjemis [at] ornl [dot] gov</code>

                        <p className="mb-0 about-line">Visual Analytics Research Scientist</p>
                        <p className="mb-0 about-line">Cyber Resilience and Intelligence Division</p>
                        <p className="mb-0 about-line"><a href="https://www.ornl.gov" target="_blank">Oak Ridge National
                            Laboratory</a></p>



                        <a className='social' href="https://www.linkedin.com/in/smonadjemi/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                        <a className='social' href="https://github.com/smonadjemi" target="_blank">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>

                        <a className='social' href="https://scholar.google.com/citations?user=OR02C9QAAAAJ&hl=en&oi=ao"
                           target="_blank">
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                        </a>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default Home;