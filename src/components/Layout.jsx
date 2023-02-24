import styles from '../styles/components/Layout.module.scss'
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const playerName = 'Log in'
class Layout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#">
                            <img src='icons/drul_logo.svg' width={30} height={30}>
                            </img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Mods</Nav.Link>
                                <Nav.Link href="#">Mums</Nav.Link>
                                <Nav.Link href="#">Colocations</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="account/login">Sign in</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    } 
}
export default Layout