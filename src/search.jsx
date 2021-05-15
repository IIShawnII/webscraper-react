import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchValue("AAAAAAAAAAAAAAAAAA");
        console.log(searchValue);
    };

    return (
        <Form
            action="/"
            method="get"
            onSubmit={onSubmit}
            className="d-flex align-items-center"
        >
            <Form.Group className="mx-auto">
                <Form.Label
                    className="text-left"
                >
                    Enter host url to scrape for text
                </Form.Label>
                <InputGroup>
                    <Form.Control
                        className=""
                        type="url"
                        placeholder="example.com"
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    <InputGroup.Append>
                        <Button className="" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};

export default SearchBar;
