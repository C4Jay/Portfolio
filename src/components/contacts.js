import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
class Contacts extends Component {
    render () {
        return(
            <div className="contact">
            <Grid className="contact-grid">
           
            <Cell col={6}>
            <h1>C4Jay</h1>
            <img src="https://paintingvalley.com/drawings/male-face-profile-drawing-32.jpg"
            alt="pic"
            style={{height: "248px"}}>
            </img>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </Cell>
            <Cell col={6}>
            <h1>Contact Me</h1>
            <hr/>

            <div className="contact-list">
            <List>
        <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <i className="fas fa-phone" aria-hidden="true"/>
            +94 77 9767676
            </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <i className="fas fa-fax" aria-hidden="true"/>
            +94 77 9767676
            </ListItemContent>
        </ListItem>
        <ListItem>
        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <i className="fas fa-envelope" aria-hidden="true"/>
            ceejay@yahoo.com
            </ListItemContent>
        </ListItem>
        
        <ListItem>
        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
            <i className="fab fa-facebook-f" aria-hidden="true"/>
            cee jay
            </ListItemContent>
        </ListItem>
        </List>
</div>
       
       
       
       



            </Cell>
            </Grid>
            </div>
            )
    }
}

export default Contacts;