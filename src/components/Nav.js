import Link from 'next/link'
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components'
import { logo } from './config'
 
const NavStyle = styled.nav`
  font-size: 18px;
  background: var(--white);

 .navbar-brand {
    text-decoration: none;  
    margin-left: 10%;
    font-size: 30px; 
    font-weight: bold;
    color: var(--black);
    
}

#nav-link, .btn{ 
    
    text-decoration: none;
    color: var(--black) ;
    font-weight: bold; 
    
} 

#nav-link, .btn:hover{
  color: var(--white);
}


`;



const NavBar = () => {

  return (
    <NavStyle> 
      
        <Navbar
          collapseOnSelect
          expand="lg"
          variant=""
          bg="transparent"
          className=""
        >
        {
        <Navbar.Brand href="#">
            
            <img
            alt=""
            src= {`${logo.url}`}
            width="26"
            height="40"
            className="d-inline-block align-center logo img-fluid"
            />{" "}
            Ideamarket
       
        </Navbar.Brand>
        }
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav ">    
                <Nav className="offset-md-6 mr-end">
                    <Link id="nav-link" href="/">
                        <a className="btn btn-outline-primary"> Skip Tutorial </a> 
                    </Link> 
                </Nav> 
          </Navbar.Collapse>
        </Navbar>    
    </NavStyle>
  );
};

export default NavBar;
