import { useState } from 'react' // for state management

//Statline component
const StatisticLine = (props) => {
  return (

      <table>
      <tbody>
        <tr>
          <td>{props.text}:  {props.good}</td>
        </tr>
      </tbody>
    </table>
    
  )
}



//Statistics Component
const Statistics = (props) => {
  //destructuring props object
  const {good, neutral, bad, all, average, positive} = props

  //conditional rendering
  if(average === 0 ){
    return <h3>No feedback gathered yet!</h3>
  } else {
  return (
    <div>
      <h2>Statistics</h2>
     
         <StatisticLine good={good} text="good" />
        
         <StatisticLine good={neutral} text="neutral" />
        
        <StatisticLine good={bad} text="bad" />
        
        <StatisticLine good={all} text="all" />
        
        <StatisticLine good={average} text="average" />
        
        <StatisticLine good={positive} text="positive" />
    </div>
  )
  }
}

//Button component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
       {props.text}
    </button>
  )
}


//votes
const VoteCounter = ({votes, ind}) => {
  
  return (
    <div>
      
      <p >This sentence has {votes[ind]} votes</p>
      
      
    </div>
  )
}

//final display
const FinalDisplay = ({votes, ind, anecdotes}) => {

const checker = () => {
  let arr = votes
  let maa = anecdotes
  let count = arr[0]
  let vay = maa[0]
  for (let i = 0; i<=arr.length; i++){
    if(arr[i] > count){
      count = arr[i]
      vay = maa[i]
      
    } 
    
  }
  return [count, vay]
}

 
const [count, vay ] = checker()
  return (
    
    <div>
      <h3>Anecdote with the most vote is: </h3>
      <p>{vay}</p>
      <p>{count} Votes</p>
      
    </div>
  )
} 



//main APP component
function App() {
  const [good, setGood] = useState(0) //tracks changes in good stats
  const [neutral, setNeutral] = useState(0)  //tracks changes in neutral stats
  const [bad, setBad] = useState(0)   //tracks changes in bad stats
  const [word, setWord] = useState('')
  const [rand, setRand] = useState()

  


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
   ]

   const [votes, setVotes] = useState(new Uint8Array(7) )


  const badhandleClick = () => {
    setBad(bad + 1)
  }

  const goodhandleClick = () => {
    setGood(good + 1)
  }

  const neutralhandleClick = () => {
    setGood(0)
    setBad(0)
    
  }
  
  const average = () => {
    let sum = good + bad
    let mean = sum / 2
    return mean
  }

  const all = () => {
    let sum = good + bad
    return sum
  }

  const positive = () => {
    let sum = good + bad
    let tot = good/sum
    let total  = tot * 100
    return total
  }
//random number generator
  const randomer = () => {
    let x = Math.floor(Math.random() * 7)
    setRand(x)
    return rand
  }

  const handleVotes = () => {
    const newY = [...votes]
    newY[rand] += 1
    setVotes(newY)
    
  }
  
  const displayAnecdote = () => {
    let y = randomer()
    let w = anecdotes[y]
    
    setWord(w)
    
    
  }


  

  return (
    <div >
      <h1>Give Feedback</h1>
      <Button text="good" onClick={goodhandleClick}/>
      <Button text="neutral" onClick={neutralhandleClick}/>
      <Button text="bad" onClick={badhandleClick}/>

      <Statistics good={good} neutral={neutral} bad={bad} average={average()} all={all()} positive={positive()}/><hr/><br/>
      <p>
        {word} <br/><br />
      </p>
      
      <VoteCounter votes={votes} ind={rand}/>
      <Button text='vote' onClick={handleVotes}/>
      <Button text="next anecdote" onClick={displayAnecdote}/>

      <FinalDisplay votes={votes} ind={rand} anecdotes={anecdotes}/>
    </div>
  );
}

export default App;
