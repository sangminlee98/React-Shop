import React, {useContext, useState} from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import data from './data.js'
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart';
import axios from 'axios';
import loadImg from './loading1.jpeg';


export let 재고context = React.createContext();

function App() {
  let [shoes,shoes변경] = useState(data);
  let [loading,loading변경] = useState(false);
  let [재고,재고변경] = useState([10,11,12]);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
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

      <Switch>
        <Route exact path="/">
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

            <재고context.Provider value={재고}>

            <div className="row">
                {
                  shoes.map((a,i) => {
                    return <Card shoes={a} i={i} key={i} />
                  }
                  )
                }
            </div>

            </재고context.Provider>
            <button className="btn btn-primary"  onClick={()=>{
              
              loading변경(true);
              // axios.post('서버URL',{id : 'codingapple', pw : 1234});
              // fetch('https://codingapple1.github.io/shop/data2.json')
              // .then() fetch는 json데이터를 object로 바꿔주지 않음 따로 해야됨
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                setTimeout(()=>{
                  loading변경(false);
                  shoes변경([...shoes, ...result.data]);
                },1000);
              })
              .catch(()=>{
                loading변경(false);
                console.log("실패했어요");
              })
            }}>더보기</button>
            {
              loading === true ?
              <div>
               <img style={{width: '50px'}} src={loadImg}/>
              </div>
              : null
            }
          </div>
        </Route>

        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
          <Detail shoes = {shoes} 재고 = {재고} 재고변경 = {재고변경}/>
          </재고context.Provider>
        </Route>

        <Route path="/cart">
            <Cart />
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width={"100%"}/>
      <h4><Link to={"/detail/"+props.i}>{props.shoes.title}</Link></h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}₩</p>
      <Test i={props.i}/>
    </div>
  )
}

function Test(props) {
  let 재고 = useContext(재고context);
  return(
    <p>재고 : {재고[props.i]}</p>
  )
}


export default App;
