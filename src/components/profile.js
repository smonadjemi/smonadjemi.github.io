import { Container, Row, Col, Image } from 'react-bootstrap'
import React from 'react';
import '../components/components.css'
import img from '../data/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Profile() {
    return (
        <>
            <Container className='section' id='home'>
                <Row className='resume-comp align-items-center'>

                    <Col className='profile-img-container' lg={{ span: 4, order: 2 }}>
                        <Row className='padding profile-img'>
                            <Image className='profile-img' src={img}></Image>
                        </Row>
                    </Col>

                    <Col className='padding' lg={{ span: 8, order: 1 }}>
                        <p className="about-line name">Shayan Monadjemi</p>

                        <p className="mb-0 about-line">Visual Analytics Research Scientist</p>
                        <p className="mb-0 about-line">Cyber Resilience and Intelligence Division</p>
                        <p className="mb-0 about-line"><a href="https://www.ornl.gov" target="_blank">Oak Ridge National
                            Laboratory (ORNL)</a></p>


                        <a className='social' href="mailto:monadjemis@ornl.gov" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </a>
                        <a className='social' href="https://www.linkedin.com/in/smonadjemi/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                        <a className='social' href="https://github.com/smonadjemi" target="_blank">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>

                        <a className='social' href="https://scholar.google.com/citations?user=OR02C9QAAAAJ&hl=en&oi=ao"
                            target="_blank">
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </a>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default Profile;