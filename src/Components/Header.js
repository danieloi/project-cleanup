import React, {Component} from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


export class Header extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {

    //     }
    // }

    render() {
        return (
            <header className='site-header' role='banner' aria-label='site-navigation'>
            <h1 className='center cursive'>Spik & Span</h1>
            {/* <Navbar fixedTop collapseOnSelect   className='site-navigation' role='navigation'>
            <Navbar.Header>
                <Navbar.Brand className='site-header-left cursive'>
                    <NavLink to='/'>Spik & Span</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer exact={true} to='/'>
                        <NavItem eventKey={1}>ORDER</NavItem>
                    </LinkContainer>
                    <LinkContainer exact={true} to='/about'>
                        <NavItem eventKey={2}>ABOUT</NavItem>
                    </LinkContainer>
                    <LinkContainer exact={true} to='/faqs'>
                        <NavItem eventKey={3}>FAQs</NavItem>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Navbar> */}
        </header>
        );
    }
}