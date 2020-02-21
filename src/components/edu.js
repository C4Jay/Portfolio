import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Edu extends Component {
    render () {
        return (
            <Grid>
                <Cell col={4}>
                <p>{this.props.strtYr} - {this.props.edYr}</p>
                </Cell>

                <Cell col={8}>
                <h4 style={{marginTop: '8px'}}>{this.props.schoolName}</h4>
                <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
} 

export default Edu;