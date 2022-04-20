import { Carousel, Container, Row, Col } from 'react-bootstrap'
// we want to generate dynamic carousel slides from an array of dishes
// a super common thing!

// let's import the array of pastas and give it a name
import dishes from '../data/menu.json'

const Home = () => (
  <Container className="my-3" fluid>
    <Row className="justify-content-center">
      <Col md={6}>
        <Carousel>
          {dishes.map((pasta) => (
            // we have to put a unique key prop for performance reasons
            <Carousel.Item key={pasta.id}>
              <img
                className="d-block w-100"
                src={pasta.image}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{pasta.name}</h3>
                <p>{pasta.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
)

export default Home
