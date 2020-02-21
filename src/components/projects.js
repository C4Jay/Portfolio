import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, CardMedia } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
        return(
            
            <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg) center / cover'}}>React Project number1</CardTitle>
            <CardText>
             industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </CardText>
            <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: 'efff'}}>
            <IconButton name="share"></IconButton></CardMenu>
            </Card>

        )
        
    }
    else if(this.state.activeTab === 1) {
        return(
            <div><h1>This is Vue</h1></div>
        )
    }else if(this.state.activeTab === 2) {
        return(
            <div><h1>This is Mongo</h1></div>
        )
    }
    else if(this.state.activeTab === 3) {
        return(
            <div><h1>This is Java</h1></div>
        )
        }
    }
    

    render () {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>VueJS</Tab>
            <Tab>Mongo</Tab>
            <Tab>Java</Tab>


            </Tabs>

            <section className="projects-grid">
            <Grid className="projects-grid">
            <Cell col={12}>
            <div className="content">
            {this.toggleCategories()}</div>
            </Cell>
            </Grid>
            
            </section>
            </div>
        )
    }
}


export default Projects;