//Header Component
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


//Part component
const Part = ({part, exx}) => {
  return(
    <p>
        {part} {exx}
    </p>
  )
}


//Content component
const Content = ({parts}) => {
  
  return(
    <div>
      <Part part={parts[0].name} exx ={parts[0].exercises}/>
      <Part part={parts[1].name} exx ={parts[1].exercises}/>
      <Part part={parts[2].name} exx ={parts[2].exercises}/>
    </div>
  )
}

//Total component
const Total = ({exTotal}) => {
  return(
    <p>Number of exercises:{exTotal[0].exercises + exTotal[1].exercises + exTotal[2].exercises}</p> 
  )
}




function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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

  return (
    <div >
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exTotal={course.parts}/>
    </div>
  );
}

export default App;
