import React from 'react';

const Header = (props) =>{
  return(
    <h1>{props.course.name} </h1>
  )
}

const Part=(props) =>{
  const name=props.part.name
  const exercises = props.part.exercises
return(
  <p> {name} {exercises}</p>
)
}

const Content = (props) =>{
  const parts= props.course.parts
  return(<div>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
  </div>
  )
}

const Total = (props) =>{
  const parts=props.course.parts
  var exercises1=0
  exercises1=parts[0].exercieses
  var exercises2=0
  exercises2=parts[1].exercieses
  var exercises3=0
  exercises3=parts[2].exercieses
  
  var total=0
  total= exercises1 + exercises2 + exercises3
  console.log(total)
  console.log(exercises1)
  console.log(exercises2)
  console.log(exercises3)
  console.log(exercises1+exercises2)
  return(
    <p>Number of exercises {total} </p>
  )
}



const App =()=> {
  const course={ 
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
      ]
    }
  return(
    <div>
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course} />
    </div>
  )
}

export default App;
