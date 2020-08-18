import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import img from '../data/img.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Publication from './single_publication'


function Publications(){
    var json = require('../data.json');
    return(
<>
<Container id='publications'>
        <Row>
            <Col lg={12}>
                <Row className='resume-comp'>
                <h3 class="mb-0">Publications</h3>
                </Row>
                {json['publications'].map(x => (
                    <Publication publication={x}></Publication>
                ))}

            </Col>
        </Row>
        <hr></hr>
</Container>
</>
    )
}

export default Publications;