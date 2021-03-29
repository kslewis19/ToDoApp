import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import TodoListItem from './TodoListItem'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import { SignalCellularNullOutlined } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import NoteListItem from './NoteListItem';


function App() {
  const [tasks, setTasks] = useState([{}])
  const [notes, setNotes] = useState([{}])
  const [checked, setChecked] = React.useState([0]);
  const [filterTasks, setFilterTasks] = useState(false)
  const [filterNotes, setFilterNotes] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setTasks(tasks.concat({
      id: Math.floor(Math.random() * 10000),
      text: event.target.value.value,
      isEditing: false
    }))


  }
  const handleSubmitNote = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNotes(notes.concat({
      id: Math.floor(Math.random() * 10000),
      text: event.target.value.value,
      isEditing: false
    }))


  }


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleEditToggle = (value, text) => () => {
    const currentIndex = tasks.indexOf(value);
    const newTasks = [...tasks];

    newTasks[currentIndex].isEditing = !newTasks[currentIndex].isEditing
    newTasks[currentIndex].text = text

    setTasks(newTasks);
  };
  const handleEditToggleNotes = (value, text) => () => {
    const currentIndex = notes.indexOf(value);
    const newNotes = [...notes];
    
    newNotes[currentIndex].isEditing = !newNotes[currentIndex].isEditing
    newNotes[currentIndex].text = text

    setNotes(newNotes);
  };
  const deleteTask= (value)=>{
    const currentIndex = tasks.indexOf(value);
    const newTasks = [...tasks];
    newTasks.splice(currentIndex, 1);
    setTasks(newTasks)
  }
  const deleteNote= (value)=>{
    const currentIndex = notes.indexOf(value);
    const newNotes = [...notes];
    newNotes.splice(currentIndex, 1);
    setNotes(newNotes)
  }
  const toggleStar= (value)=>{
    console.log("srar")
    const currentIndex = notes.indexOf(value);
    const newNotes = [...notes];
    newNotes[currentIndex].star = !newNotes[currentIndex].star
    setNotes(newNotes)
  }
  const handleTaskFilter=() =>{
    setFilterTasks(!filterTasks)
  }
  const handleNotesFilter=() =>{

    setFilterNotes(!filterNotes)
    console.log(filterNotes)
  }
  return (
    <div className="app">


      <List className="todolist">

        <h1>Things To Do</h1>
        <form method="post" onSubmit={handleSubmit}>
          <TextField name='value' placeholder="enter new task" >
          </TextField>
          <Button type="submit" variant="contained">Add Task</Button>
          <Checkbox
          edge="start"
          checked={filterTasks}
          onClick = {handleTaskFilter}
          disableRipple
        />
         Hide completed
        </form>


        {tasks.map((value) => {
          if (value.id == null||(filterTasks==true &&checked.indexOf(value)!==-1)) {
            return (null)
          }
          const labelId = `checkbox-list-label-${value.id}`;


          return (
            <TodoListItem value={value} handleToggle={handleToggle} lableId={labelId} checked={checked} handleEditToggle={handleEditToggle} handleDelete= {deleteTask} />
          );

        })}
      </List>
      <List className="noteslist">
        <h1>Notes</h1>
        <form method="post" onSubmit={handleSubmitNote}>
          <TextField name='value' placeholder="enter new note">
          </TextField>
          <Button type="submit" variant="contained">Add Note</Button>
          <Checkbox
          edge="start"
          checked={filterNotes}
          onClick = {handleNotesFilter}
          disableRipple
        />
        Only Stared
    
        </form>

        {notes.map((value) => {
          if (value.id == null ||(filterNotes==true && value.star==false)) {
            return (null)
          }

          const labelId = `checkbox-list-label-${value}`;
          return (
            <NoteListItem labelId={labelId} value={value} handleEditToggleNotes={handleEditToggleNotes} handleDelete= {deleteNote} handleStarToggle={toggleStar}/>
          );
        })}
      </List>
    </div>
  );
}

export default App;
