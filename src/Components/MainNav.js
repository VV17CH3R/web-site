import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './content/images/logo2.png';
import Form from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';





export default class MainNav extends Component {


  render() {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    return (
      <div>
        <>
          <Navbar className='navbar__container' sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand className='logo__brand' href="@">
                <img  src={logo}
                  width="66px" height="66px"
                  className="d-inline-block"
                  alt="logo" 
                ></img>
                <h1 className='logo__brand__words'>Клубничный <br></br> салют</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <NavLink to="/" className={({isActive})=>isActive ? activeLink : normalLink} >Главная</NavLink>
                  <NavLink to="/sitePages/Assort" className={({isActive})=>isActive ? activeLink : normalLink}>Ассортимент</NavLink>
                  <NavLink to="/sitePages/Info" className={({isActive})=>isActive ? activeLink : normalLink}>Доставка</NavLink>
                  <NavLink to="/sitePages/Basket" className={({isActive})=>isActive ? activeLink : normalLink}>Корзина</NavLink>


                </Nav>
                <Form  >

                  <FormControl
                    type="text"
                    placeholder='Искать сорт...'
                  >
                  </FormControl>
                  <Button variant="outline-info">Поиск</Button>

                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </>
      </div>
    )
  }
}

