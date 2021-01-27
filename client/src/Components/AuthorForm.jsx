import React, { useState } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const AuthorsForm = () => {
  const [name, setName] = useState("")
  const [errors, setErrors] = useState({});

  const submitHandler = e => {
    e.preventDefault()
    axios.post('/api/authors/new', {
      name
    })
      .then(res => {
        console.log("respone:  ", res)
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch(err => console.log("Error: ", err))
    setName("")
  }

  return (
    <div>
      <h3>Favorite Authors</h3>
      <Link to={'/'} >Home</Link>
      <form onSubmit={submitHandler} className="mt-3">
        <p>Add an Author!</p>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} name="name" className="form-control" onChange={e => setName(e.target.value)} />
          <p className="text-danger">{errors.name ? errors.name.message : ""}</p>
        </div>
        <input type="submit" value="Submit" className="btn btn-info  mr-3" />
        <Link to={'/'} className="btn btn-info" >Cancel</Link>
      </form>
    </div>
  )
}

export default AuthorsForm
