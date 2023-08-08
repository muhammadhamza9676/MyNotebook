import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const{addNote} = context;

    const [note, setNote] = useState({title:"", description:"", tag:""});
    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"", description:"", tag:""})
        props.showAlert("Added Successfully" ,"success")
    }

    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className='my-5'>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form className='my-3'>
                    <div className="form-group my-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} minLength={3} required onChange={onChange} />
                         
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} minLength={3} required onChange={onChange} />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button type="submit" disabled={note.title.length < 3} className="btn btn-primary my-2" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
