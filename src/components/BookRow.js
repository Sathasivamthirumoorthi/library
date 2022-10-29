import { useState } from 'react';
import axios from 'axios';  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function BookRow({book,getData}){

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);


    const EdithandleClose = () => setShowEdit(false);
    const EdithandleShow = () => setShowEdit(true);
    const DeleteHandleClose = () => setShowDelete(false);
    const DeleteHandleShow = () => setShowDelete(true);

    // edit fields
    const [isbn,setIsbn] = useState(book.isbn);
    const [title,setTitle] = useState(book.title);
    const [subject,setSubject] = useState(book.subject);
    const [publisher,setPublisher] = useState(book.publisher);
    const [language,setLanguage] = useState(book.language);
    const [pages,setPages] = useState(book.pages);
    
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



    const HandleEdit = (e) =>{

        e.preventDefault();

        const obj = {
            isbn : isbn,
            language : language,
            subject : subject,
            title : title,
            pages : pages,
            publisher : publisher
        }

        // axios.put("",obj).then((res) =>{
        //     console.log(res)
        //     setShow(false)
        // }).catch((e) =>{
        //     console.log(e)
        // })

        console.log(obj);

        setIsbn('');
        setLanguage('');
        setPublisher('');
        setTitle('');
        setSubject('');
        setPages('');


    }

    const handleDelete = (e) =>{
        console.log({_id : book._id})
        getData({_id : book._id})
        setShowDelete(false)

    }
   
   
    return (
        <>
            <tr>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.language}</td>
                <td>
                    <Button variant="primary" onClick={EdithandleShow}>
                        Edit
                    </Button>
                </td>
                <td>
                    <Button variant="danger"  onClick={DeleteHandleShow}>
                        Delete
                    </Button>
                
                </td>
            </tr>

            
            <Modal show={showDelete} onHide={DeleteHandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Are you sure you want to permanently delete this book?
                </Modal.Body>

                <Modal.Footer>
                        <Button variant="secondary" onClick={DeleteHandleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleDelete} type='submit'>
                            Delete  
                        </Button>
                </Modal.Footer>
            </Modal>




            <Modal show={showEdit} onHide={EdithandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form className='mt-2' onSubmit={HandleEdit}>
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
                        <Modal.Footer>
                        <Button variant="secondary" onClick={EdithandleClose}>
                            Close
                        </Button>
                        <Button variant="warning" type='submit'>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
                
                
                
            </Modal>
        </>  
    )
}

export default BookRow;