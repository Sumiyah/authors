import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';



const AuthorsList = () => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    getAuthors()
  }, [])

  function getAuthors() {
    axios.get('/api/authors')
      .then(res => {
        console.log("RESPONSE:", res);
        setAuthors(res.data.author)
      })
      .catch(err => console.log("Error: ", err))

  }

  const deleteThisItem = (authorID) => {
    axios.delete(`/api/authors/delete/${authorID}`)
      .then(response => {
        console.log(response)
        getAuthors()

      })
  }

  return (
    <div>
      <div class="row mb-5 ">
        <div class="col-sm-8 "><h3>Favorite Authors</h3></div>
        <div class="col-sm-4"><Link to={'/new'} className="btn btn-success">Add an author</Link></div>
      </div>
      <div className=" row">
        <div className="col">

          <ul className="list-group shadow">
            {
              authors.map((author, i) =>
                <li key={i} className="p-2 list-group-item list-group-item-action list-group-item-info justify-content-between ">
                  <div className="row justify-content-around">
                    <div className="col">
                      <h4>{author.name}</h4>
                    </div>
                    <div className="col">
                      <Link to={`/view/${author._id}`} className=" btn btn-outline-primary btn-sm mr-2">Edit</Link>
                      <button className=" btn btn-outline-danger btn-sm " onClick={() => { deleteThisItem(author._id) }}>Remove</button>
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default AuthorsList
