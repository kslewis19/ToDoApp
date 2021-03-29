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


function App() {
  const [tasks, setTasks] = useState([{}])
  const [notes, setNotes] = useState([{}])
  const [checked, setChecked] = React.useState([0]);
  const [filterTasks, setFilterTasks] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setTasks(tasks.concat({
      id: Math.floor(Math.random() * 10000),
      text: event.target.value.value
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
  
  const handleTaskFilter=() =>{
    setFilterTasks(!filterTasks)
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
        </form>


        {tasks.map((value) => {
          if (value.id == null||(filterTasks==true &&checked.indexOf(value)!==-1)) {
            return (null)
          }
          const labelId = `checkbox-list-label-${value.id}`;


          return (
            <TodoListItem value={value} handleToggle={handleToggle} lableId={labelId} checked={checked} handleEditToggle={handleEditToggle}  />
          );

        })}
      </List>
      <List className="noteslist">
        <h1>Notes</h1>
        <form method="post" onSubmit={handleSubmitNote}>
          <TextField name='value' placeholder="enter new note">
          </TextField>
          <Button type="submit" variant="contained">Add Note</Button>
        </form>

        {notes.map((value) => {
          if (value.id == null) {
            return (null)
          }

          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value.id} role={undefined} >
              <ListItemText id={labelId} primary={`${value.text}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
                <IconButton edge="center" aria-label="comments">
                  <DeleteIcon />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default App;
