import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import axios from "axios"

function AddBook(){

    const [isbn,setIsbn] = useState("");
    const [title,setTitle] = useState("");
    const [subject,setSubject] = useState("");
    const [publisher,setPublisher] = useState("");
    const [language,setLanguage] = useState("");
    const [pages,setPages] = useState("");
    const navigate = useNavigate("");
    
    const isbnChaneHandler = (event) =>{
        setIsbn(event.target.value);

    }

    const pageChangeHandler = (event) =>{
        setPages(event.target.value);
    }

    const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
    }
    const languageChangeHandler = (event) =>{
        setLanguage(event.target.value);
    }
    const publisherChangeHandler = (event) => {
        setPublisher(event.target.value);
    }

    const subjectChangeHandler = (event) =>{
        setSubject(event.target.value);
    }



    const handleSubmit = (e) =>{

        e.preventDefault();

        const obj = {
            isbn : isbn,
            language : language,
            subject : subject,
            title : title,
            pages : pages,
            publisher : publisher
        }
        

        axios.post("http://localhost:8081/books/",obj).then((res) =>{
            console.log(res)
            navigate("/books")
        }).catch((e) =>{
            console.log(e)
        })



        console.log(obj);

        setIsbn('');
        setLanguage('');
        setPublisher('');
        setTitle('');
        setSubject('');
        setPages('');


    }

    return (
        <div className="container center">
            <div className='row'>
            <div className="col-lg 3 col-md-3 col-sm-12 col-xs-12">
            <div className='card shadow-lg p-3 mb-5 bg-body rounded row'>
                <div className='card-body '>
                <div className=" bg-warning text-black shadow-lg p-3 mb-5 rounded">
                    <h2><strong>Add Book</strong></h2>
                </div>
                    <Form className='mt-2' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control value={isbn} onChange={isbnChaneHandler} type="text" placeholder="Enter ISBN" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={title} onChange={titleChangeHandler} type="text" placeholder="Enter title" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control value={subject} type="text" onChange={subjectChangeHandler} placeholder="Enter subject" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control value={publisher} type="text" onChange={publisherChangeHandler} placeholder="Enter publisher" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Language</Form.Label>
                            <Form.Control value={language} type="text" onChange={languageChangeHandler} placeholder="Enter language" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of Pages</Form.Label>
                            <Form.Control value={pages} type="text" onChange={pageChangeHandler} placeholder="Enter number of pages" required/>
                        </Form.Group>
                        <Button variant="warning" type="submit">
                            Add
                        </Button>
                    </Form>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default AddBook;