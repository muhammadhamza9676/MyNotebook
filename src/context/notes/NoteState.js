import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    //const host = "http://localhost:5000";
    const host = "https://my-notebook-backend.vercel.app";
    let json = "";
    const notesInit = []
    const [notes, setNotes] = useState(notesInit);

    // Get all notes
    const getNote = async () =>{
        //Api call
        const response = await fetch(`${host}/api/notes/getallnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            },
        });
        
        json = await response.json();
        console.log(json);
        setNotes(json);

    }

    // Add a note
    const addNote = async (title, description, tag) =>{
        //Api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        
        json = response.json();

        //Logic
       const note = {
            "_id": "64c25191a0c91d970034d7b1",
            "user": "64c023f2f6d6cc5c66275945",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-27T11:14:25.978Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Edit a note
    const editNote= async (id, title, description, tag) =>{
        //Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        
        json = response.json(); 

        //Logic
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id)
            {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    // Delete a note
    const deleteNote = async (id)=>{
        //Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            },
        });
        
        json = response.json();
        console.log(json);

        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;