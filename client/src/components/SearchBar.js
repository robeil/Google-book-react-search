import React, {useState} from 'react';
import {Row, Form, Button, Col} from 'react-bootstrap';
import {getBooksOnline} from '../utils/API';
const key = process.env.BOOKS_API_KEY;

export default function SearchBar(props) {
    const [searchStr, setSearchStr] = useState("");
    
    const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
    //const key = `key=AIzaSyDhp8VnSFLR0CNhcqebgmddp9NNWyKt-TM`;

    const handleSearch = (e) => {
        e.preventDefault()
        const completeUrl = APIURL + searchStr.split(" ").join("+") + {key};
        getBooksOnline(completeUrl)
        .then(res => {
            if (res) {
                props(props.setBooks(res.data.items)  // ? search fo r
                )}
            
        })
        .catch(err => console.log(err));
    }

    return (
        <Form>
            <Row className="mx-auto" style={{paddingTop: '60px', margin: 'auto', paddingLeft: '5%', paddingRight: '5%'}}>
                <Col>
                <Form.Control placeholder="Book Name" onChange={(e) => {setSearchStr(e.target.value)}}/>
                </Col>
                <Button variant="primary" type="search" onClick={handleSearch}>
                    Search
                </Button>
            </Row>
        </Form>
    )
}