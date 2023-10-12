import { Navbar, Button, FormControl, Nav, Form, NavDropdown, Container, NavbarBrand } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './components.css'
import { renderIntoDocument } from 'react-dom/test-utils';

/**
 *
       <Nav.Link href="#teaching">Teaching</Nav.Link>
      <Nav.Link href='#cv'>CV</Nav.Link>
 */

function NavBar(props) {

    return (
        <>
            <Navbar className='nav' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container>
                        <Nav className="content-align-left" activeKey="/home">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#publications">Publications</Nav.Link>
                            <Nav.Link href="#teaching">Teaching</Nav.Link>
                            <Nav.Link href="#cv">CV</Nav.Link>
                        </Nav>
                        <Nav className='content-align-right'>
                            <Form>
                                <Form.Check
                                    checked={props.isDark}
                                    onChange={({target}) => props.setIsDark(target.checked)}
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
