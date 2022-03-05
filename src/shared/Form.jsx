import SearchIcon from '@material-ui/icons/Search'
import { React, useState } from 'react'
import './Form.css'

function Form() {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
           <button type="submit" className="form-button"><SearchIcon className="searchIcon" /></button>
            <input 
            type="text"
            placeholder="Start typing to search..."
            value={text}
            onChange={handleChange}
            />
    </form>
  )
}

export default Form
