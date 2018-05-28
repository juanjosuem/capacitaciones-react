import React, { Component } from 'react'
import { Image,Grid, Row, Col,Label, Jumbotron, Carousel } from 'react-bootstrap';


class Content extends Component {

	render() {
		const divStyle = {
  WebkitTransition: 'all',
  msTransition: 'all',
	backgroundColor: '#815656'
};
    return (
      <Jumbotron>
        <Grid>
          <h1>Primera Práctica</h1>
          <Grid id="grilla">
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Carousel>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/carousel.png" />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/carousel.png" />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/carousel.png" />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={6} md={4}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              </Col>
            </Row>
            <Row className="show-grid">
             <Col xs={12} md={12}>
               <h1><Label>New</Label></h1>
             </Col>
           </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
              <h2>
                Lorem Ipsum
              </h2>
                      <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </Col>
              <Col xsHidden md={4}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
              <h2>
                Lorem Ipsum
              </h2>
                      <Image src="https://react-bootstrap.github.io/thumbnail.png" thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </Col>
              <Col xsHidden md={4}>
                <p style={divStyle}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              </Col>
            </Row>

          </Grid>
        </Grid>
      </Jumbotron>
		)
	}

}

export default Content
