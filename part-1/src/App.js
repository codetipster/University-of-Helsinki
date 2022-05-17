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
const Content = ({parts, ex}) => {
  return(
    <div>
      <Part part={parts.part1} exx ={ex.exercises1}/>
      <Part part={parts.part2} exx ={ex.exercises2}/>
      <Part part={parts.part3} exx ={ex.exercises3}/>
    </div>
  )
}

//Total component
const Total = ({exTotal}) => {
  return(
    <p>Number of exercises:{exTotal.exercises1 + exTotal.exercises2 + exTotal.exercises3}</p> 
  )
}




function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div >
      <Header course={course}/>
      <Content parts={{part1, part2, part3}} ex={{exercises1, exercises2, exercises3}}/>
      <Total exTotal={{exercises1, exercises2, exercises3}}/>
    </div>
  );
}

export default App;
