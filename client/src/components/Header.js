import React from 'react';
import {getBooksDB} from '../utils/API';
import * as ReactBootstrap from 'react-bootstrap';
import SearchBar from '../components/SearchBar';



export default function Header({setBooks}) {
    const handleSavedBooks = (e) => {
        getBooksDB()
        .then(res => setBooks(res.data))
    }
    const handleBookSearch = (e) => {
        setBooks([]);
    }
    return (
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand href="#">Google Book Search</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link onClick={handleSavedBooks}>Saved Books</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link onClick={handleBookSearch}>Search New Books</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <SearchBar />
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        );
}