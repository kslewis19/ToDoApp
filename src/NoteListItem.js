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
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import StarRatingComponent from 'react-star-rating-component';

function NoteListItem(props){
    const [text, setText] = useState(props.value.text)
    
    const handleChange = (event) => {
        setText(event.target.value)
      }
      const keyPress = (event)=>{
        if (event.which == 13){
          console.log("pressed")
         props.handleEditToggleNotes(props.value, text)()
      }
      }
      var noEdit = <ListItemText id={props.labelId} primary={`${props.value.text}`} />
      var edit = <div>
        <input name='value' value={text} onChange={handleChange} onKeyDown={keyPress} >
        </input>
      </div>
    return(
        <ListItem key={props.value.id} role={undefined} >
              <IconButton edge="center" aria-label="comments">
        <FiArrowDown />
      </IconButton>
      <IconButton edge="center" aria-label="comments">
        <FiArrowUp />
      </IconButton>
      <StarRatingComponent
            starCount={1} 
            value= {props.value.star}
            onStarClick={()=>{props.handleStarToggle(props.value)}}

     />
      {props.value.isEditing ? edit : noEdit}
              
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={props.handleEditToggleNotes(props.value, text)}>
                  <CommentIcon />
                </IconButton>
                <IconButton edge="center" aria-label="comments" onClick={props.handleDelete(props.value)} >
                  <DeleteIcon />
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>
    )
}
export default NoteListItem