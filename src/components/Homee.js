import React from 'react';
import Notes from './Notes';
import AddNote from './AddNote';

export default function Homee(props) {
  const {showAlert} = props;
  return (
    <div className='container mt-5'>
      <AddNote showAlert={showAlert}/>
      <Notes showAlert={showAlert}/>
    </div>
  )
}
