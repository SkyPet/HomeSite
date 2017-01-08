import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bios} from './Bios';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Row, Col, Panel} from 'react-bootstrap';
const brand='The Group';
const Links=[
  {label:"Projects", anchor:"#projects"},
  {label:"About", anchor:"#about"},
]
const NavStyles={
  borderRadius:0,
  marginBottom:0, 
  backgroundColor:"#eee",
  //position:"absolute",
  minWidth:"100vw",
  zIndex:100000
}
const JumboStyles={
  backgroundColor: 'rgba(238, 238, 238, .7)',
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 0,
	color: "grey",
	width: "100%",
	padding: "25% 0 25% 0",
  minHeight:"100vh"
}

const d3Styles={
  position: "relative",
	zIndex: -10,
	minWidth: "100vw",
	minHeight: "100vh",
	width: "auto",
	height: "auto",
  paddingTop:"15%",
	backgroundSize: "custom",
	transition: "1s opacity"
}
const About=[
  {
    img:"https://media.licdn.com/media/AAEAAQAAAAAAAAZAAAAAJGY1NmFkOTUzLWRlYzItNDE4Yy04YWVkLTZjMTk4Yjk2ODE2YQ.jpg", 
    title:"Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    img:"https://media.licdn.com/media/AAEAAQAAAAAAAAcPAAAAJGMxYjM0YWFkLWQ5N2QtNGZmYy04MmE4LWE2MGY3NjdiMzU0Yw.jpg", 
    title:"Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    img:"https://media.licdn.com/media/AAEAAQAAAAAAAAdJAAAAJGViY2IyYTFmLWJjZGYtNDIyMi1hNDJjLWY0NjhmYjEwNjkxNA.jpg", 
    title:"Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    img:"https://media.licdn.com/media/AAEAAQAAAAAAAAY3AAAAJDBlNGZlNTIyLWFmZjMtNDE5YS1iMzE1LTNkMTRhMWNmM2JkNQ.jpg", 
    title:"Title",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
const Projects=[
  {title:"Title", text:"Basic Panel Example", img:""},
  {title:"Title", text:"Basic Panel Example", img:""},
  {title:"Title", text:"Basic Panel Example", img:""},
  {title:"Title", text:"Basic Panel Example", img:""},
]

const SectionStyle={
  margin:"5% 0 5% 0"
}
const SkyPetNav=({brand, links, styles})=>
  <Navbar style={styles} fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{brand}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      {links.map((val, index)=>{
        return(<NavItem key={index} href={val.anchor}>{val.label}</NavItem>);
      })}
    </Nav>
    </Navbar.Collapse>
  </Navbar>
const SkyPetJumboTron=({styles})=>
 <div>
  
  <Jumbotron style={styles} className="text-center">
      <h1 >Lets Do Fintech</h1>
      <p className="lead">A Disruptive Way to Emerge Forward.</p>
  </Jumbotron>
  <div className="d3" style={d3Styles}/>
  </div>

const Project=({text, title, img, children})=>
<Col md={6}>
  <Panel>
    <p>{text}</p>
    {children}
  </Panel>
</Col>
const footerStyle={
  padding: "5% 0 20% 0",
	backgroundColor: "tan",
	color: "white"
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <SkyPetNav brand={brand} links={Links} styles={NavStyles}/>
        <SkyPetJumboTron styles={JumboStyles} />
        <div className="container" style={SectionStyle}>
        <h2>The Team</h2>
        <Row>
        {About.map((val,index)=>{
          return(<Bios key={index} title={val.title} imgSrc={val.img}>
          {val.text}
        </Bios>);
        })}
        </Row>
        </div>
        <div className="container" style={SectionStyle}>
          <h2>Projects</h2>
          <Row>
            {Projects.map((val, index)=>{
              return(<Project key={index} text={val.text} title={val.title} img={val.img}/>);
            })}
          </Row>
        </div>
        <footer style={footerStyle}>
          <div className="container">
            <p>Footer</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
