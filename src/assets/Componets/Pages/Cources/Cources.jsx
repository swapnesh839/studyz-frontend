import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import CustomCard from '../../miniComponents/CustomCard/CustomCard'

const Cources = () => {
  return (
    <Container fluid className='mt-2'>
      <Row className='p-2'>
          <h4 className="my-4">All Courses</h4>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={800} Ratting={4}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={1100} Ratting={3.8}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={890} Ratting={4.5}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={999} Ratting={3.5}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={800} Ratting={4}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={1100} Ratting={3.8}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={890} Ratting={4.5}/>
          </Col>
          <Col className="my-2" md="3" sm="12">
            <CustomCard Cost={999} Ratting={3.5}/>
          </Col>
        </Row>
    </Container>
  )
}

export default Cources