import React, { useContext, useEffect, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  let navigate = useNavigate();
  const { showAlert } = props;
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  useEffect(() => {
    const tok = localStorage.getItem('token');
    if (!tok) {
      navigate("/login");
    }
    else {
      getNote();
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef('')
  const updateNote = (note) => {
    ref.current.click()
  }

  return (
    <>
      <button ref={ref} type="button" className="btn btn-primary invisible" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-2">
          {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} />
        })}
      </div>
    </>
  )
}

export default Notes
