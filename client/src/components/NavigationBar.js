import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext'
import logo from '../img/coding.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar() {
  const { user, setUser } = useContext(UserContext)

  console.log(user)
  return (
    <Navbar className='p-3 mb-2 bg-light text-dark'>
      <Container>
        <Navbar.Brand href='/'>
          <img alt='logo' src={logo} width='30' height='30' /> Devs On Deck
        </Navbar.Brand>
        {/* <Nav className='me-auto'>
          <Nav.Link>Link1</Nav.Link>
          <Nav.Link>Link2</Nav.Link>
          <Nav.Link>ect...</Nav.Link>
        </Nav> */}
        <Navbar.Toggle />
        <Nav className='me-auto'>
          <NavDropdown title='Users' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/allusers'>Show All Users</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {user?.loggedIn ? (
          <Nav className='justify-content-end'>
            <NavDropdown
              title={
                <div className='d-inline'>
                  {/* <FontAwesomeIcon icon='fa-solid fa-user' /> */}
                  Welcome {user.email}!
                </div>
              }
            >
              {/* <NavDropdown.Item href='/edituser'>Edit Profile</NavDropdown.Item> */}
              <NavDropdown.Item href='/logout'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className='justify-content-end'>
            <Nav.Link href='/login'>Sign in</Nav.Link>
            <Nav.Link href='/registration'>Register</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavigationBar
