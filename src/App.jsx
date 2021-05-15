import { Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Search from "./search";

function App() {
    return (
        <div className="d-flex align-items-center vh-100">
            <Card className="m-auto">
                <Container className="text-center">
                    <Row className="">
                        <Col>
                            <Search />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col sm>Report missing text</Col>
                    </Row>
                </Container>
            </Card>
        </div>
    );
}

export default App;
