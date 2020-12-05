import React from 'react';
import { saveBooksDB, deleteBooksDB, getBooksDB } from '../utils/API';
import { Button } from 'react-bootstrap';
import './Result.css';

export default function Result(props) {
    var tempArray = []
    const handleSaveOrDelete = (e) => {
        const myBook = JSON.parse(e.target.value)
        if (myBook.onlineId) {
            deleteBooksDB(myBook.onlineId)
                .then(res => {
                    getBooksDB()
                        .then(res => props.setBooks(res.data))
                }
                )
        }
        else {
            const data = {
                onlineId: myBook.id,
                volumeInfo: {
                    title: myBook.volumeInfo.title,
                    description: myBook.volumeInfo.description || "Not Description",
                    canonicalVolumeLink: myBook.volumeInfo.canonicalVolumeLink,
                    imageLinks: {
                        smallThumbnail: myBook.volumeInfo.imageLinks.smallThumbnail,
                    }
                }
            }
            saveBooksDB(data)
                .then(res => {
                    props.books.map((book) => {
                        if (book.id === data.onlineId) {
                            tempArray.push(data)
                        }
                        else {
                            tempArray.push(book)
                        }
                    })
                    props.setBooks(tempArray)
                })
        }
    }
    return (
        <div>
            {props.books && props.books.map((book) => (
                <div className="result">
                    <div className="image-group">
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"></img>
                        <Button variant="primary" data-id={book.onlineId} value={JSON.stringify(book)} onClick={handleSaveOrDelete}>{book.onlineId ? "Delete Book" : "Save Book"}</Button>
                        <Button variant="secondary" onClick={() => window.location = book.volumeInfo.canonicalVolumeLink}>View</Button>
                    </div>
                    <div className="text-group">
                        <h3 style={{ textAlign: 'left' }}>{book.volumeInfo.title}</h3>
                        <p style={{ textAlign: 'left' }}>{book.volumeInfo.description}</p>
                    </div>

                </div>
            ))}
        </div>

    )
}