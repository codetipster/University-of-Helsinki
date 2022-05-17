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
  console.log(parts.part1.exercises)
  return(
    <div>
      <Part part={parts.part1.name} exx ={parts.part1.exercises}/>
      <Part part={parts.part2.name} exx ={parts.part2.exercises}/>
      <Part part={parts.part3.name} exx ={parts.part3.exercises}/>
    </div>
  )
}

//Total component
const Total = ({exTotal}) => {
  return(
    <p>Number of exercises:{exTotal.part1.exercises + exTotal.part2.exercises + exTotal.part3.exercises}</p> 
  )
}




function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div >
      <Header course={course}/>
      <Content parts={{part1, part2, part3}}/>
      <Total exTotal={{part1, part2, part3}}/>
    </div>
  );
}

export default App;
