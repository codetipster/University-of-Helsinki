import Part from "./Part"
import Header from "./Header"
import Sum from "./Sum"
const Content = ({content, title}) => {

    const sum = content.reduce( (accumulator, object) => {
        return accumulator + object.exercises;
    }, 0)

    return (
        <div>
            <Header title={title} />
            {content.map(obj=>
                <p><Part name={obj.name} ex={obj.exercises} key={obj.id}/></p>
            )}
            <Sum x={sum}/>

        </div>
    )
}

export default Content
