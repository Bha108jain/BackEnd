import React from 'react'
import axios from 'axios'
const AddBook = () => {
    const handleadd= async (e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const author=e.target.author.value;
        const date=e.target.date.value;
        const image=e.target.image.value;
        const book={title,author,date,image}
        await axios.post('http://localhost:3000/books',book)
        alert('Book Added ')
    }
  return (
    <div>
      <h1>Add Book Details</h1>
      <form onSubmit={handleadd}>
        Title: <input type='text' name='title' required/>
        Author: <input type='text' name='author' required/>
        Date: <input type='date' name='date' required/>
        Image URL: <input type='text' name='image' required/>
      <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook