import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';





const About = () => {
  return (
   <>
   <Container fluid className="py-3" style={{backgroundColor:" rgb(45, 44, 44)", color:"white"}}>
  <h3 className="text-center">About Me</h3>
  <hr className="py-3" />
  
         <Row style={{display:"flex"}}>
         <Col xs={12} md={6} xl={4}>
         <div style={{border:"1px solid  rgb(87, 86, 86)", textAlign:"center", paddingBottom:"20px", paddingRight:"5px", paddingLeft:"5px", paddingTop:"20px"}}>
          <Image style={{backgroundColor:"black"}} width="35%" src="Adobe Express - file.png" roundedCircle />
          <div className="div1">Hey I'Am Harshit Rawat <br />  <span className="div2">Developer <br /> <br /> hr6014158@gmail.com </span> <br />
          <FaGithubSquare /> <FaLinkedin /> <FaInstagramSquare /> <FaSquareXTwitter /> <br /> <br />   <a href="https://github.com/harshit415"> <Button style={{backgroundColor:"orange", border:"none"}}>Visit My Github</Button></a>
                            
          </div>
          </div>
        </Col>
        <Col>
        <div className="py-5">
            <h3>About Me <span style={{color:"orange"}}>!</span></h3>  
            Hi, I'm Harshit, a passionate MERN stack developer with a love for building scalable, user-friendly web applications. I graduated with a degree in Computer Science and have been coding for [X] years. My journey into web development began when I built my first website, and I've been hooked ever since.

I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have experience building full-stack applications. I'm also skilled in RESTful APIs, state management with Redux, and deploying applications using platforms like Heroku and Vercel.

What drives me as a developer is the ability to solve real-world problems through code and create seamless user experiences. I thrive on learning new technologies and pushing the boundaries of what's possible.

When I'm not coding, you can find me exploring new hiking trails, playing guitar, or experimenting with new recipes in the kitchen.
</div>
        </Col>
               

         </Row>

           <h3 className="text-center pt-5 ">My Skills</h3>
           <hr />

           
       <div class="container my-5">
       <table style={{ backgroundColor: 'rgb(45, 44, 44)', color: 'white', border: '1px solid rgb(100, 100, 100)', borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ backgroundColor: 'rgb(60, 60, 60)', padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Category</th>
          <th style={{ backgroundColor: 'rgb(60, 60, 60)', padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Frontend</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>HTML, CSS, JavaScript, React, Bootstrap</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Backend</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Node.js, Express, REST APIs</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Database</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>MongoDB</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>DevOps & Tools</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Git, Github</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Programming Languages</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>JavaScript, C++</td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Other</td>
          <td style={{ padding: '10px', border: '1px solid rgb(100, 100, 100)' }}>Agile Methodology, Problem Solving, Team Collaboration</td>
        </tr>
      </tbody>
    </table>
</div>


       
   </Container>
   
   </>
  )
}

export default About
