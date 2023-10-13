import { Container, Row } from 'react-bootstrap'
import React from 'react';
import './components.css'

function About() {
    return (
        <>
            <Container className='section' id='about'>

                <Row className='resume-comp'>
                    <h3 class="mb-0">About</h3>
                </Row>

                <Row className='resume-comp resume-comp-content'>

                    <p>
                        I joined ORNL in August 2023 as a research scientist. Broadly, I investigate mixed-initiative visual analytic tools that guide users in data exploration and discovery.
                        The overarching goal of my research is two-fold. 
                        Catering to novice users, I aim to make data-driven decision making more accessible to people across various demographics and levels of education. 
                        Catering to domain experts, I aim to ease the process of interactively designing custom-made intelligent systems for their respective domains. 
                        Thus far, I have particulaly found myself working with domains including geospatial intelligence analysis, material discovery, air traffic control, and medical decision-making.
                    </p>

                    <p> Prior to joining ORNL, I completed my PhD in 2023 as a member of the <a href="http://visualdata.wustl.edu/"
                                                                             target="_blank">Visual Interface and
                        Behavior Exploration (VIBE) Lab</a> at Washington University in St. Louis under the supervision of
                        Drs. <a href={'https://engineering.wustl.edu/faculty/Alvitta-Ottley.html'} target={'_blank'}>Alvitta
                            Ottley</a> and <a href="https://www.cse.wustl.edu/~garnett/" target="_blank">Roman
                            Garnett</a>.
                        While in graduate school, I worked with the <a
                            href="https://www.nasa.gov/intelligent-systems-division" target="_blank"> Intelligent
                            Systems Division </a> at NASA Ames Research Center as a pathways intern.
                        I received a BS in Computer Science with honors and a minor in Mathematics from the University of Texas at
                        Dallas in 2018.</p>

                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default About;