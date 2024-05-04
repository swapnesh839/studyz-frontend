import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Image } from 'react-bootstrap';
import sitelogo from "../../images/sitelogo.png"
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
// import { FaAnglesRight } from "react-icons/fa6";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import "./Sidebar.css"

const Sidebar = () => {
    const [show, setShow] = React.useState(false);
    
    return (
        <Container onClick={() => { setShow((i) => !i) }} style={{ left: "0px", top: "0px", zIndex: 4, backgroundColor: "#112244", width: 'fit-content',zIndex:"89" }} className={`position-fixed d-flex flex-column p-3 vh-100 Sidebarbody ${!show && "Sidebarbodytransform"}`}>
            <Image className="rounded-5 me-auto" src={sitelogo} />
            {!show ? <div
                style={{ backgroundColor: "#112244",color:"white" }}
                className={`${show ? "position-absolute d-none" : "position-fixed Sidebarbodytransformbtn"} top-50 translate-middle d-flex p-2 rounded-5`}>
                <FaAngleDoubleRight />
            </div> :
                <div
                    style={{ right: "-32px", backgroundColor: "#112244",color:"white" }}
                    className={`${show ? "position-absolute " : "position-fixed d-none Sidebarbodytransformbtn"} top-50 translate-middle d-flex p-2 rounded-5`}>
                    <FaAngleDoubleLeft />
                </div>
            }
            <NavLink to="/" className="w-100 my-3 p-2 text-white text-decoration-none sidebatbtn">
            <span><FaHouseChimneyUser className="me-2 mb-1 fs-5" />Dashboard</span>
            </NavLink>
            <NavLink to="/Cources" className="w-100 my-3 p-2 text-white text-decoration-none sidebatbtn">
            <span><FaBook className="me-2 mb-1 fs-5" />Courses</span>
            </NavLink>
            <NavLink to="/Assignments" className="w-100 my-3 p-2 text-white text-decoration-none sidebatbtn">
            <span><MdOutlineAssignment className="me-2 mb-1 fs-5" />Assignments</span></NavLink>
            <NavLink to="/Exams" className="w-100 my-3 p-2 text-white text-decoration-none sidebatbtn">
            <span><FaPenFancy className="me-2 mb-1 fs-5" />Exams</span>
            </NavLink>
        </Container>


    )
}

export default Sidebar