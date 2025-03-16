import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Work = () => {
  return (
    <>
    
    <Container fluid className="py-3" style={{ backgroundColor: 'rgb(45, 44, 44)', color: 'white' }}>
      <h3 className="text-center">My Projects</h3>
      <hr className="py-3" />

      {/* Centered Container for Cards */}
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} xl={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '40vh' }} variant="top" src="images.jpeg" />
              <Card.Body>
                <Card.Title>Concert Booking</Card.Title>
                <Card.Text>
               
                My concert booking website is a one-stop platform for music lovers to discover
                </Card.Text>
                <a href="https://concertbookingg.netlify.app"><Button variant="primary">Visit Now</Button></a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '40vh' }} variant="top" src="images (1).jpeg" />
              <Card.Body>
                <Card.Title>SkyHigh Airline</Card.Title>
                <Card.Text>
                 It's My Flight booking website you can registered your Flight and also you can booked a flight.
                </Card.Text>
               <a href="https://airline-project-nine.vercel.app/"> <Button variant="primary">Visit Now</Button></a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={4} xxl={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ height: '40vh' }} variant="top" src="istockphoto-483424683-612x612.jpg" />
              <Card.Body>
                <Card.Title>Currency Converter</Card.Title>
                <Card.Text>
               It's My currency converter website is an online tool that allows users to convert one currency into another exchange rates. 
                </Card.Text>
                <a href="https://currency-converter-mauve-rho.vercel.app/">
                  <Button variant="primary">Visit Now</Button></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}

export default Work
