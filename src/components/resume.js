import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Edu from './edu';
import Experience from './experience';
import Skill from './skill'
class Resume extends Component {
    render () {
        return(
            <div>
                <Grid>
                    <Cell col ={4} phone={12} className="resume-left-col">
                    <div style={{textAlign: 'center'}}>
                    <img
                    src="https://lh3.googleusercontent.com/proxy/DjJVwhR8MyELmQsmmOZOvuSz80h3OaN5r5WMJks4MJdmA-0DWqWUHP5gSQkDKY__ePHgpyvtRiP2aLLe-Z3miD0Uyw84J0HyAuwxfmdIE_qaLZGW2ZTDmjCFU-KLtOknapLcR52YU2zn2tfL9THa6O4"
                    alt="pic"
                    style={{height: '196px'}}
                    ></img>
                    </div>
                    <h1 style={{paddingTop: '2em'}}>C4Jay</h1>
                    <h4 style={{color: 'grey'}}>Designer</h4>
                    <hr style={{borderTop: '3px solid purple', width:'50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                    <hr style={{borderTop: '3px solid purple', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>696 new york , new york</p>
                    <h5>Phone</h5>
                    <p>+94 976766969</p>
                    <h5>mail</h5>
                    <p>ceejay@yahoo.com</p>
                    <h5>facebook</h5>
                    <p>cee jay</p>
                    <hr style={{borderTop: '3px solid purple', width: '50%'}}/>
                    
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h1>Edu</h1>
                    <Edu
                    strtYr="2012"
                    edYr="2016"
                    schoolName="University"
                    schoolDescription="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"
                    ></Edu>

<Edu
                    strtYr="2010"
                    edYr="2012"
                    schoolName="Other University"
                    schoolDescription="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"
                    ></Edu>

                    <hr style={{borderTop: '3px solid green'}}/>

                    <h1>Experience</h1>

                    <Experience
                    strtYr="2009"
                    edYr="2012"
                    profeName="profe-1"
                    profeDescription="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"
                    ></Experience>

<Experience
                    strtYr="2012"
                    edYr="2018"
                    profeName="profe-11"
                    profeDescription="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was"
                    ></Experience>

                    
<hr style={{borderTop: '3px solid green'}}/>

                    <Skill
                    skill="vue.Js"
                    progress="80">

                    </Skill>

                    <Skill
                    skill="node.Js"
                    progress="40">

                    </Skill>

                    <Skill
                    skill="react"
                    progress="60">

                    </Skill>

                    <Skill
                    skill="Java"
                    progress="60">

                    </Skill>

                    




                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;