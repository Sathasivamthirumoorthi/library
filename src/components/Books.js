import BookRow from "./BookRow";
import "./Books.css"
import axios from "axios"
import { useEffect,useState } from "react";

const Books = [
    {
        id : 1,
        isbn : 213112,
        subject : "computer",
        title : 'Web',
        publisher : "person1",
        language : 'english',
        pages : 321
    },
    {
        id : 2,
        isbn : 5748,
        publisher : "person2",
        subject : "computer",
        title : 'tech',
        language : 'english',
        pages : 321
    },
    {
        id : 3,
        isbn : 987321,
        subject : "computer",
        title : 'myth',
        publisher : "person3",
        language : 'english',
        pages : 521
    },
    {
        id : 4,
        isbn : 88233,
        subject : "law",
        title : 'law',
        publisher : "person4",
        language : 'english',
        pages : 621
    }
]


function Book(){

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/books/").then(res =>{
            setBooks(res.data)
            console.log(res.data)
        }).catch(error =>{
            console.log("error ", error)
        })
    },[])

    const getData = (values) =>{
        console.log(values)
        axios.delete(`http://localhost:8081/books/${values._id}`,{_id : values._id}).then((res) =>{
            console.log(res);
        }).catch((e)=>{
            console.log(e);
        })
    }

    


    return (

        <div className="container center">
              <div className="row">
              <div className="col-lg 3 col-md-3 col-sm-12 col-xs-12">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body table-responsive">
                <h1 className   ="card-title">Book List</h1>
                <div className="card-title d-flex justify-content-end">
                <a href="books/addbook" className="btn bg-warning shadow-lg p-2 mb-2 rounded">Add Book</a>
                </div>
            <table className="table tb table-dark table-striped">
            <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Title</th>
      <th scope="col">Language</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
        <tbody>
            {
                books.map(element => <BookRow getData={getData} key={element._id} book={element}/>
                )
            }
        </tbody>
   
  
    </table>
    </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Book;