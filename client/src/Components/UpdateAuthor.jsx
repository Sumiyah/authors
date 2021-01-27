import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const UpdateAuthor = props => {
  const [name, setName] = useState("")

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`https://test-app-authors.herokuapp.com/api/authors/${props._id}`)
      .then(res => {
        console.log("RESPONSE in Update:", res);
        setName(res.data.author.name)
      })
      .catch(err => console.log(err))
  }, [props._id])

  const changeAuthor = e => {
    e.preventDefault()
    axios.put(`https://test-app-authors.herokuapp.com/api/authors/update/${props._id}`, {

      name,

    })
      .then(res => {
        console.log(res)
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate(`/`);
        }
      })
      .catch(err => console.log("Error: ", err))
  }


  return (
    <div>
      <h3>Favorite Author</h3>
      <Link to={'/'} >Home</Link>
      <form onSubmit={changeAuthor} className="mt-3">
        <p>Edit this Author:</p>
        <div className="form-group">
          <label>name</label>
          <input type="text" value={name} name="name" className="form-control" onChange={e => setName(e.target.value)} />
          <p className="text-danger">{errors.name ? errors.name.message : ""}</p>
        </div>
        <input type="submit" value="Update" className="btn btn-success  mr-3" />
        <Link to={'/'} className="btn btn-secondary" >Cancel</Link>
      </form>
    </div>
  )
}

export default UpdateAuthor
