import React from 'react';
import '../App.css';
import { Navbar , Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class nav extends React.Component {
  
  Logout = () => {
    localStorage.clear();
    window.location.href = '/login'
  }

  render() {
    if(localStorage.getItem('email')){
      if(localStorage.getItem('type')==="admin"){
        return (
          <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/"><img src="https://img.icons8.com/bubbles/50/000000/product.png"/></Navbar.Brand>
      
            <Navbar.Collapse class="collapse navbar-collapse">
              <Nav class="navbar-nav ml-auto">
                <Nav.Link href="/usersList" ><img src="https://img.icons8.com/bubbles/50/000000/conference-call.png"/></Nav.Link>
                <Nav.Link href="/product" ><img src="https://img.icons8.com/bubbles/50/000000/price-tag.png"/></Nav.Link>
                <Nav.Link href="/category" ><img src="https://img.icons8.com/bubbles/50/000000/ingredients.png"/></Nav.Link>
                <Nav.Link onClick={ this.Logout } ><img src="https://img.icons8.com/bubbles/50/000000/exit.png"/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }else if(localStorage.getItem('type')==="sm"){
        return (
          <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/"><img src="https://img.icons8.com/bubbles/50/000000/product.png"/></Navbar.Brand>
      
            <Navbar.Collapse class="collapse navbar-collapse">
              <Nav class="navbar-nav ml-auto">
                <Nav.Link href="/product" ><img src="https://img.icons8.com/bubbles/50/000000/price-tag.png"/></Nav.Link>
                <Nav.Link onClick={ this.Logout } ><img src="https://img.icons8.com/bubbles/50/000000/exit.png"/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }else{
        return (
          <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/"><img src="https://img.icons8.com/bubbles/50/000000/product.png"/></Navbar.Brand>
      
            <Navbar.Collapse class="collapse navbar-collapse">
              <Nav class="navbar-nav ml-auto">
                <Nav.Link href="/cart" ><img src="https://img.icons8.com/bubbles/50/000000/shopping-cart.png"/></Nav.Link>
                <Nav.Link href="/order" ><img src="https://img.icons8.com/bubbles/50/000000/used-product.png"/></Nav.Link>
                <Nav.Link onClick={ this.Logout } ><img src="https://img.icons8.com/bubbles/50/000000/exit.png"/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
      }
    }else{
      return (
        <Navbar bg="secondary" variant="dark">
          <Navbar.Brand href="/"><img src="https://img.icons8.com/bubbles/50/000000/product.png"/></Navbar.Brand>
    
          <Navbar.Collapse class="collapse navbar-collapse">
            <Nav class="navbar-nav ml-auto">
              <Nav.Link href="/login"><img src="https://img.icons8.com/bubbles/50/000000/login-rounded-right.png"/></Nav.Link>
              <Nav.Link href="/register"><img src="https://img.icons8.com/bubbles/50/000000/add-file.png"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

  }
}

export default nav;