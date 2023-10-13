import { Container, Row, Col } from 'react-bootstrap'
import React from 'react';
import './components.css'
import Publication from './single_publication'


function Publications(props) {
    var json = require('../data/data.json');

    var head = 'Publications'
    if (props.selected_only) {
        head = 'Selected Publications'
    }
    return (
        <>
            <Container className='section' id='publications'>
                <Row>
                    <Col lg={12}>
                        <Row className='resume-comp'>
                            <h3 class="mb-0">{head}</h3>
                        </Row>
                        {json['publications'].map(x => (
                            <Publication
                                selected_only={props.selected_only}
                                publication={x}
                            />
                        ))}

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default Publications;