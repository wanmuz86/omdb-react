import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function ReviewListItem(props){
    return (
        <ListItem>
        <ListItemText primary={props.rating.Source} secondary={props.rating.Value}/>
      </ListItem>
    )
}
