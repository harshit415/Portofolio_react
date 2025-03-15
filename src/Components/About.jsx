import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const About = () => {
  return (
   <>
   <Container fluid style={{backgroundColor:" rgb(45, 44, 44)", height:"90vh", color:"white"}}>
         <Row style={{display:"flex"}}>
           <Col>
           <img style={{backgroundColor:"black"}} width='25%' src="Adobe Express - file.png" alt="" />
           </Col>
                <div><h3>About Me</h3></div>

         </Row>
   </Container>
   
   </>
  )
}

export default About
