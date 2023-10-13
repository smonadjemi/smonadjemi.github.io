import { Navbar, Nav, Form, Container } from 'react-bootstrap'
import React from 'react';
import './components.css'

/**
 *
       <Nav.Link href="#teaching">Teaching</Nav.Link>
      <Nav.Link href='#cv'>CV</Nav.Link>
 */

function NavBar(props) {

    const currentPageClass = {
        true: 'current_page',
        false: ''
    }

    return (
        <>
            <Navbar className='nav' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container>
                        <Nav className="content-align-left" activeKey="/home">
                            <Nav.Link
                                className={currentPageClass[props.currentPage == 'home']}
                                onClick={() => props.setCurrentPage('home')}
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                className={currentPageClass[props.currentPage == 'publications']}
                                onClick={() => props.setCurrentPage('publications')}>
                                Publications
                            </Nav.Link>

                            <Nav.Link
                                className={currentPageClass[props.currentPage == 'teaching']}
                                onClick={() => props.setCurrentPage('teaching')}>
                                Teaching
                            </Nav.Link>

                            <Nav.Link
                                className={currentPageClass[props.currentPage == 'cv']}
                                onClick={() => props.setCurrentPage('cv')}>
                                CV
                            </Nav.Link>
                        </Nav>
                        <Nav className='content-align-right'>
                            <Form>
                                <Form.Check
                                    checked={props.isDark}
                                    onChange={({ target }) => props.setIsDark(target.checked)}
                                    type="switch"
                                    id="dark-mode-switch"
                                />

                            </Form>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavBar;
