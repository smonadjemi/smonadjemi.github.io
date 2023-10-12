import { Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image } from 'react-bootstrap'
import React from 'react';
import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Publication(props) {
    var authors_list = props.publication.authors.split(', ')
    var authors_list_string = authors_list.map((x, i) => {
        if (x == 'Shayan Monadjemi') {
            if (i == authors_list.length - 1)
                return <><b>{x}</b></>
            else
                return <><b>{x}</b>, </>
        }
        else {
            if (i == authors_list.length - 1)
                return <>{x}</>
            else
                return <>{x}, </>
        }

    })

    if (props.publication.selected) {

        return (
            <>
                <Row className='single-publication'>
                    <Col lg={12}>
                        <div>{props.publication.title}</div>
                        <div className='text-muted'>{authors_list_string}</div>
                        <div className='text-muted'><em>{props.publication.venue}</em>. {props.publication.year}.</div>
                        <div>
                            <span class="badge badge-secondary">{props.publication.paper_tag}</span>
                            {
                                Object.keys(props.publication.links).map((x) => { return <a className='pub-link' href={props.publication.links[x]} target='_blank'>{x}</a> })
                            }
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    else{
        return(
            <></>
        )
    }
}

export default Publication;