import CourseList from '../components/course-list.component';
import { Link } from 'react-router-dom';

function FacultyCourses() {
    return (
        <div>
            {/* <input 
                className='search-box' 
                type='search' 
                placeholder='search courses' 
                onChange={(event) => {
                //const filteredCourses;
            }}/> */}
    
            <h3>This is the Courses page</h3>

            <CourseList/>

            <Link className='nav-link' to='/course-details'>
              Course Details
            </Link>
        </div>
        
    )
}

export default FacultyCourses;