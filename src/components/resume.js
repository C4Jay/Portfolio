import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Resume extends Component {
    render () {
        return(
            <div>
                <Grid>
                    <Cell col={4}>left
                    <div style={{textAlign: 'center'}}>
                    <img
                    src="https://lh3.googleusercontent.com/proxy/DjJVwhR8MyELmQsmmOZOvuSz80h3OaN5r5WMJks4MJdmA-0DWqWUHP5gSQkDKY__ePHgpyvtRiP2aLLe-Z3miD0Uyw84J0HyAuwxfmdIE_qaLZGW2ZTDmjCFU-KLtOknapLcR52YU2zn2tfL9THa6O4"></img>
                    </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>right</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;