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
          <p><h2>MERN Stack Developer</h2></p>
           <p style={{fontSize:"smaller"}}> a passionate and results-driven Full Stack Developer  with a knack for building seamless, scalable, and user-centric web applications. With expertise in both front-end and back-end technologies, I thrive on turning ideas into functional, high-performance digital solutions.</p>
      <div className="pb-5">
           <a href="\HResume.pdf" download="HResume.pdf"> <Button variant="light" >Dowwnlad CV</Button></a> 
        <a href="https://github.com/harshit415">   <Button variant="light" className="ms-2">Visit Github</Button></a>
        </div>
          </Col>
        </Row>
       
       </Container> 

      

       <div class="container my-5">

  <h2 class="text-center mb-4 ">My Skills</h2>
  <hr class=" mx-auto mb-5 "/>
  <table class="table table-hover table-bordered">
    <thead class="table-light">
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Frontend</td>
        <td>HTML, CSS, JavaScript, React, Bootstrap</td>
      </tr>
      <tr>
        <td>Backend</td>
        <td>Node.js, Express, REST APIs</td>
      </tr>
      <tr>
        <td>Database</td>
        <td> MongoDB</td>
      </tr>
      <tr>
        <td>DevOps & Tools</td>
        <td>Git, Github</td>
      </tr>
      <tr>
        <td>Programming Languages</td>
        <td>JavaScript, C++</td>
      </tr>
      <tr>
        <td>Other</td>
        <td>Agile Methodology, Problem Solving, Team Collaboration</td>
      </tr>
    </tbody>
  </table>
</div>



    </>
  );
};

export default Home;