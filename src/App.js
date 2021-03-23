import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
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


function App() {
  const [tasks, setTasks] = useState([""])

  const [checked, setChecked] = React.useState([0]);


  const handleSubmit = (event) => {
    event.preventDefault()
    setTasks(tasks.concat(event.target.value))

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


  return (
    <div className="app">
      <div className="header">
        <form method="post" onSubmit={handleSubmit}>
          <input name='value' placeholder="enter new task">
          </input>
          <button type="submit">Add Task</button>
        </form>
      </div>



      <List className="todolist">
        {tasks.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.value}`} />
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
