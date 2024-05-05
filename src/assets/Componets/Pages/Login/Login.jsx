import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../../Context/Actions/AuthAction.js"
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { GetLocalstoragedata, SettLocalstoragedata } from '../../../LocalstorageFunctions/LocalstorageFunctions.js'

export const Loginpage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [FormData, SetFormData] = useState(
        {
            "email": "",
            "password": ""
        }
    )
    const handleOnChange = (e) => {
        const { name, value } = e
        console.log(e.name);
        SetFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // const [Localdata, Setlocaldata] = useState(null)
    useEffect(() => {
        const storeddata = localStorage.getItem("logincredentials")
        if (storeddata) {
            dispatch(login(JSON.parse(storeddata)))
            console.log(JSON.parse(storeddata));
        }
    }, []);


    const FormSubmit = (e) => {
        e.preventDefault()
        if (FormData.email != "" && FormData.password != "") {
            axios.get(`http://localhost:3000/api/login/user?email=${FormData.email}&password=${FormData.password}`)
                .then((res) => {
                    console.log(res.data);
                    // const resdata = res.data
                    // SettLocalstoragedata("logincredentials", res.data)
                    localStorage.setItem("logincredentials", JSON.stringify(res.data))
                    dispatch(login(res.data))
                    navigate("/")
                }).catch((err) => {
                    console.warn(err);
                })
        } else {

        }
    }

    return (
        <Container fluid className="vh-100">
            <Container className="text-white" style={{ backgroundColor: "#112244", minHeight: "100%" }}>
                <h3 className="text-center py-5">Login Form</h3>
                <Form onSubmit={FormSubmit}>
                    <Form.Group className='p-2'>
                        <Form.Label className="fs-3">Email</Form.Label>
                        <Form.Control name="email" onChange={(e) => handleOnChange(e.target)} value={FormData.email} type="email" placeholder="Please Enter Your email" />
                    </Form.Group>
                    <Form.Group className='p-2'>
                        <Form.Label className="fs-3">Password</Form.Label>
                        <Form.Control name="password" onChange={(e) => handleOnChange(e.target)} value={FormData.password} type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className='p-2'>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                    <Form.Group className='p-2'>
                        credentials as faculty:- <br />
                        email: john@example.com<br />
                        password:password123<br />
                        or as student <br />
                        email: jane@example.com<br />
                        password:password123
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    )
}
