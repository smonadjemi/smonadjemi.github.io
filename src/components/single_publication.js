import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import img from '../data/img.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Publication(props){
    return(
<>
    <Row className='resume-comp'>
        <Col lg={12}>
            <div>{props.publication.title}</div>
            <div className='text-muted'>{props.publication.authors}</div>
            <div className='text-muted'><em>{props.publication.venue}</em></div>
        </Col>
    </Row>
</>
    )
}

export default Publication;