import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'

const Coursedetails = () => {
    const [searchParams] = useSearchParams();
    const { id, type } = Object.fromEntries(searchParams);

    return (
        <div className='p-3'>
            <Container fluid>
                <Container className="shadow-lg  p-3">
                    <Row>
                            <h5 className="py-2 border-bottom">Course Details for {type} with id {id}</h5>
                        <Col md="8">
                            <h5 className="py-2">React js</h5>
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged. It was popularised
                                in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </span>
                            <p className="mt-4">
                                Date : - 04-05-2024 to 19-07-2024
                            </p>
                        </Col>
                        <Col md="4" className="order-sm-first order-md-last">
                            <Image width="100%" className="rounded" src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Coursedetails