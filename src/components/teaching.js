import {Navbar, Button, FormControl, Nav, Form, NavDropdown, Card, Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import './components.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'


function Teaching() {
    return (
        <>
            <Container className='section' id='teaching'>
                <Row>
                    <Col lg={12}>
                        <Row className='resume-comp'>
                            <h3 class="mb-0">Teaching</h3>
                        </Row>
                        <Row className='resume-comp resume-comp-content'>
                            <Col lg={12}>
                                <p>I discovered my passion towards teaching in early high school years while volunteering for after-school tutoring programs. Inspired by the rewarding moments of helping others grasp concepts, I decided to pursue teaching opportunities in my undergraduate years. While at UT Dallas, I joined the <a href={'https://studentsuccess.utdallas.edu/'} target={'_blank'}>Student
                                    Success Center</a> as a math peer tutor. Working for the peer tutoring program, my job responsibilities during my three-year career were to tutor diverse groups of students in algebra, calculus, and linear algebra. After one year of tutoring, I was promoted to a team leader with the additional responsibilities of hosting
                                    weekly course reviews, performing tutor evaluations, and assisting in hiring decisions.</p>
                                <p>One of my motivations for attending graduate school was to further refine my teaching skills and join the community of educators. In my first year at Washington University, I joined the <a href={'https://ctl.wustl.edu/programs/epic-learning-community/'} target={'_blank'}> Exploring Practices in Classroom (EPIC)</a> program offered by the <a
                                    href={'https://ctl.wustl.edu/'} target={'_blank'}>Center for Teaching and Learning </a>. Through attending EPIC workshops, I participated in pedagogical conversations with my peers from across disciplines and learned research-based strategies for engaging students and fostering an effective learning environment. Meanwhile, I took this knowledge to practice by teaching two extremely talented high school students basic programming and artificial intelligence through the <a href={'https://codeconnects.org/'} target={'_blank'}>Coding School</a>, a national non-profit organization promoting computer science education and literacy. In Spring 2021, I was a teaching assistant for the Advanced Visualizations course (CSE 557A) at Washington University. </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </>
    )
}

export default Teaching;