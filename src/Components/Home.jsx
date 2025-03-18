import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCheck } from "react-icons/fa";


const Home = () => {
  return (
    <>
       <Container fluid style={{backgroundColor:"black", alignItem:"center"}}> 


        <Row>
          <Col xs={12} md={6}>
            <img style={{ height:"90vh",  width:"100%"}} src="Adobe Express - file.png" alt="Home Page" />
          </Col>
          <Col xs={12} md={6} style={{margin:"auto", color:"#ffffff"}} >
        
          <h3>Hi, I am HARSHIT,</h3>
         <h2>MERN Stack Developer</h2>
           <p style={{fontSize:"smaller"}}> a passionate and results-driven Full Stack Developer  with a knack for building seamless, scalable, and user-centric web applications. With expertise in both front-end and back-end technologies, I thrive on turning ideas into functional, high-performance digital solutions.</p>
      <div className="pb-5">
           <a href="HARSHIT_REASUME.pdf" download="HARSHIT_REASUME.pdf"> <Button variant="light" >Dowwnlad CV</Button></a> 
        <a href="https://github.com/harshit415">   <Button variant="light" className="ms-2">Visit Github</Button></a>
        </div>
          </Col>
        </Row>
       
       </Container> 

      


    </>
  );
};

export default Home;