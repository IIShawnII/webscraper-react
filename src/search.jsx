import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = () => {

    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(url);
    };

    return (
        <Form
            action="/"
            method="get"
            onSubmit={onSubmit}
            // className="d-flex align-items-left"
        >
            <Form.Group controlId="formEmail">
                <Form.Label className="mt-2">Email address</Form.Label>
                <Form.Control required type="email" placeholder="email@email.com" onChange={(e)=>setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    Only used for sending you the results.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Host Url to scrape for text</Form.Label>
                <Form.Control required type="url" placeholder="http://www.example.com" onChange={(e)=>setUrl(e.target.value)}/>
            </Form.Group>

            <Button className="float-right" variant="primary" type="submit" onSubmit={onSubmit}>
                Submit
            </Button>
        </Form>
    );
};

export default SearchBar;
