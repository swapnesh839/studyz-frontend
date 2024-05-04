import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Image, Button, ButtonGroup } from 'react-bootstrap'
import user from "../../images/user.png"
import notification from "../../images/notification.png"
import sitelogo from "../../images/sitelogo.png"
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../Context/Actions/AuthAction'

const Header = () => {
  const dispatch = useDispatch()
  const [isopen,setisopen]=useState(false)
  const hide = ()=>{
    setisopen(false)
  }
  const show = ()=>{
    setisopen(true)
  }
  const userlogout = ()=>{
    dispatch(logout())
  }
  return (
    <Container fluid className="p-2 text-white d-flex flex-row-reverse position-sticky top-0 align-content-center" style={{ backgroundColor: "#112244",zIndex:"88" }}>
      <Modall hide={hide} show={isopen} logout={userlogout} />
      <div className="p-2 px-4 my-auto">
        <Image className="rounded-5 me-2 border border-1 border-danger" width={"30px"} height={"30px"} src={notification} />
        <Image className="rounded-5 me-2 border border-1 border-danger" width={"30px"} height={"30px"} src={user} />
        <span onClick={show} className='pointer'>
          logout ?
        </span>
      </div>
      <Image className="rounded-5 me-auto" src={sitelogo} />
    </Container>
  )
}

export default Header

const Modall = ({ show, hide, logout }) => {

  // const yes = ()=>{
  //   logout()
  //   hide()
  // }
  
  return(
  
  <Modal size='sm' onHide={hide} show={show}>
    {/* <Modal.Header closeButton>
    </Modal.Header> */}
    <Modal.Body>
      <h6>Do you Really Want To Logout ?</h6>
      <ButtonGroup  className="text-center">
        <Button variant='success'className="" onClick={logout}>Yes</Button>
        <Button variant='danger'className="" onClick={hide}>No</Button>
      </ButtonGroup>
    </Modal.Body>
  </Modal>
)}