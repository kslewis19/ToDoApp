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
import { SignalCellularNullOutlined } from '@material-ui/icons';

function TodoListItem (props) {
  
   var noEdit= <ListItemText id={props.labelId} primary={`${props.value.text}`} />
   var edit= <div> put text book here</div>
    return(
      <ListItem key={props.value.id} role={undefined} dense button onClick={props.handleToggle(props.value)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={props.checked.indexOf(props.value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': props.labelId }}
        />
      </ListItemIcon>
      {props.value.isEditing? edit: noEdit}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments" onClick={props.handleEdit(props.value)}>
        <CommentIcon />
        </IconButton>
        <IconButton edge="center" aria-label="comments">

          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
      
    </ListItem>

    )
  }

export default TodoListItem;