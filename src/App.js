
import React, { Component } from 'react'
import './App.css'
import photo from './photo.jpg'

export default class App extends Component {
  state={
    Person :{
      fullname:"Fat Freddy's Dropdown",
      bio:"New Zealand seven-piece band from Wellington, whose musical style has been characterised as any combination of dub, reggae, soul, jazz, rhythm and blues, and techno.",
      profession:"Artist",
      imgSrc:photo
    },
    show:false,
    count:0
  }
  componentDidMount() { 
    setInterval(() => { 
      this.setState({count:+(this.state.count) + 1})
     }, 1000)
   }
  render() {
    return (
      <div className="App">
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.setState({show:!this.state.show})}>Show</button>
        {this.state.show?<div className='Person'>
          <h1>{this.state.Person.fullname}</h1>
          <p>{this.state.Person.bio}</p>
          <h2>{this.state.Person.profession}</h2>
        <img src={this.state.Person.imgSrc} alt="band cover"/>
        </div>:null}
      </div>
    )
     }

  }
