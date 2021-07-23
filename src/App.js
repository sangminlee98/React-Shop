import React, {useState} from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import data from './data.js'

function App() {

  let [shoes,shoes변경] = useState(data);
  let products = [<Product1/>,<Product2/>,<Product3/>];

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="container"> 
        <div className="row">
          <Product1 상품명 = {shoes[0].title} 내용 = {shoes[0].content} 가격 = {shoes[0].price} />
          <Product2 상품명 = {shoes[1].title} 내용 = {shoes[1].content} 가격 = {shoes[1].price} />
          <Product3 상품명 = {shoes[2].title} 내용 = {shoes[2].content} 가격 = {shoes[2].price} />
        </div>
      </div>
    </div>
  );
}

function Product1(props) {
  return(
  <div className="col-md-4"><img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
    <h4>{props.상품명}</h4>
    <p>{props.내용}</p>
    <p>{props.가격}₩</p>
  </div>
  )
}

function Product2(props) {
  return(
  <div className="col-md-4"><img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
    <h4>{props.상품명}</h4>
    <p>{props.내용}</p>
    <p>{props.가격}₩</p>
  </div>
  )
}

function Product3(props) {
  return(
  <div className="col-md-4"><img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
    <h4>{props.상품명}</h4>
    <p>{props.내용}</p>
    <p>{props.가격}₩</p>
  </div>
  )
}


export default App;
