import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import cv from '../data/cv.pdf';


function CV() {
    return (
        <>
            <Container className='section' id='cv'>
                <Row>
                    <Col lg={12}>
                        <Row className='resume-comp'>
                            <h3 class="mb-0">Curriculum Vitae</h3>
                        </Row>
                        <Row className='resume-comp resume-comp-content'>
                            <Col lg={12}>
                                <p>You may download my updated academic CV <a href={cv} target={'_blank'}>here</a>.</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default CV;