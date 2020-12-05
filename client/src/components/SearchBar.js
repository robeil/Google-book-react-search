import React, {useState} from 'react';
import {Row, Form, Button, Col} from 'react-bootstrap';
import {getBooksOnline} from '../utils/API';

export default function SearchBar(props) {
    const [searchStr, setsearchStr] = useState("");
    
    const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const key = `:keyes&key=AIzaSyDhp8VnSFLR0CNhcqebgmddp9NNWyKt-TM`;

    const handleSearch = (e) => {
        e.preventDefault()
        const completeUrl = APIURL + searchStr.split(" ").join("+") + key;
        getBooksOnline(completeUrl)
        .then(res => {
            if (res) {
                props.setBooks(res.data.items)
            }
        })
        
    }

    return (
        <Form>
            <Row style={{paddingTop: '60px', margin: 'auto', paddingLeft: '5%', paddingRight: '5%'}}>
                <Col>
                <Form.Control placeholder="Book Name" onChange={(e) => {setsearchStr(e.target.value)}}/>
                </Col>
                <Button variant="primary" type="search" onClick={handleSearch}>
                    Search
                </Button>
            </Row>
        </Form>
    )
}