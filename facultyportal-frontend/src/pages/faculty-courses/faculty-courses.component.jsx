import CourseList from '../../components/course-list/course-list.component';
import SearchBox from '../../components/search-box/search-box.component';
import { useState, useEffect } from 'react';
import axios from "axios";

const baseURL = 'http://localhost:3000/api'

function FacultyCourses() {
    
    const [searchField, setSearchField] = useState('');
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setCourses(response.data);
            setError(null);
          })
          .catch(setError);
    }, []);
    if (error) return <p>An error occurred</p>

    // useEffect(() => {
    //     const newFilteredCourses = courses.filter((course) => {
    //       return course.name.toLocaleLowerCase().includes(searchField);
    //     });

    //     setFilteredCourses(newFilteredCourses);
    // }, [courses, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div>
            <h1>This is the Courses page</h1>

            <SearchBox
                className='courses-search-box'
                placeholder='search your courses'
                onChangeHandler={onSearchChange}
            />

            {/* <CourseList courses={ courses } /> */}

        </div>
    )
}

export default FacultyCourses;