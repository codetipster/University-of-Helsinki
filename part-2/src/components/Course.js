
import Content from "./Content"


const Course = ({course}) => {

    
    
    return (
        <div>
            
            {course.map(courseObj=> <Content title={courseObj.name} key={courseObj.id} content={courseObj.parts}/>)}
            <hr/>
            
        </div>
    )
}

export default Course

