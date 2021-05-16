import { Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Search from "./search";

function App() {
    return (
        <div className="d-flex align-items-center vh-100">
            <Card className="m-auto">
                <Container className="text-left">
                    <Row className="">
                        <Col>
                            <Search />
                        </Col>
                    </Row>
                    <Row className="text-right">
                        <Col
                            sm
                            as="a"
                            href="mailto:shariar@dnsnetworks.com"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 mb-2"
                        >
                            Report missing text from scrapper
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    );
}

export default App;
