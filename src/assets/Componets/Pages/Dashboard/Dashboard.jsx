import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Dashbordcard1 from './Dashbordcard1'
import sun from "../../../images/sun.png"
import usericon from "../../../images/usericon.png"
import cources from "../../../images/cources.png"
import star from "../../../images/star.png"
import CustomCard from '../../miniComponents/CustomCard/CustomCard'

const Dashboard = () => {
  return (
    <>
      <Container fluid className='mt-2'>
        <Row className='p-2'>
          <Col>
            <Container className="shadow-lg p-3 rounded-2">
              <Dashbordcard1 icon={sun} text2={"swapnesh panda"} />
            </Container>
          </Col>
          <Col>
            <Container className="shadow-lg p-3 rounded-2">
              <Dashbordcard1 icon={cources} text2={2500} text1={"My Courses"} />
            </Container>
          </Col>
          <Col>
            <Container className="shadow-lg p-3 rounded-2">
              <Dashbordcard1 icon={usericon} text2={50000} text1={"Students"} />
            </Container>
          </Col>
          <Col>
            <Container className="shadow-lg p-3 rounded-2">
              <Dashbordcard1 icon={star} text2={4.6} text1={"Average rating"} />
            </Container>
          </Col>
        </Row>
        <Row className='p-2'>
          <Col md="6" sm="12">
            <Container fluid className="p-2 shadow rounded">
              <div style={{ backgroundColor: "#112244" }} className="d-flex justify-content-between">
                <span className='p-2 mx-1 text-white'>Notifications</span>
                <span className='p-2 mx-1 text-decoration-underline text-white'>See all</span>
              </div>
              <Container className="my-2 overflow-scroll hiddenscrollbar" style={{height: "100px"}}>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
              </Container>
            </Container>
          </Col>
          <Col md="6" sm="12">
            <Container fluid className="p-2 shadow rounded">
              <div style={{ backgroundColor: "#112244" }} className="d-flex justify-content-between">
                <span className='p-2 mx-1 text-white'>Notifications</span>
                <span className='p-2 mx-1 text-decoration-underline text-white'>See all</span>
              </div>
              <Container className="my-2 overflow-scroll hiddenscrollbar" style={{height: "100px"}}>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
                <div className="d-flex justify-content-between bg-dark-subtle rounded-1 my-2">
                  <span className='p-2 mx-1'>Notifications</span>
                  <span className='p-2 mx-1 text-decoration-underline text-primary'>See all</span>
                </div>
              </Container>
            </Container>
          </Col>
        </Row>
        <Row className='p-2'>
          <h4 className="my-4">My Recent teaching</h4>
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
    </>
  )
}

export default Dashboard