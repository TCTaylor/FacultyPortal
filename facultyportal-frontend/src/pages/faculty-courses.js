import {variables} from '../components/Variables.js';
import { Link } from 'react-router-dom';

function FacultyCourses() {
    return (
        <div>
            <h3>This is the Courses page</h3>
            <Link className='nav-link' to='/course-details'>
              Course Details
            </Link>
        </div>
    )
}

export default FacultyCourses;