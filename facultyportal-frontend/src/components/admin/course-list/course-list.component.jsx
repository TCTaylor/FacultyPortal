import Modal from "../../modal/modal.component";
import Loading from "../../loading/loading.component";
import Error from "../../error/error.component";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function CourseMaintList({ courses }) {
  const { facultyId } = useParams();

  const [loading, setLoading] = useState(false);
  const [faculty, setFaculty] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/Faculty/" + facultyId)
      .then((response) => {
        setFaculty(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setModalOpen(false);
    setLoading(true);
    // axios
    //   .delete(API_BASE_URL + "/FacultyCourses/" + selectedCourse.id)
    //   .then((response) => {
    //     if (response) window.location.reload(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div style={{ maxWidth: "800px" }}>
      <div style={{ float: "right", paddingRight: "15px" }}>
        <Link to={"/courses-maint" + "/add/" + facultyId}>
          <button className="btn btn-primary" title="Add">
            <i className="bi bi-plus-lg"> </i>
            Add Course
          </button>
        </Link>
      </div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Number</th>
            <th scope="col">Title</th>
            <th scope="col">Section</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.courseId}>
                <td width={100}>{course.courseSubject}</td>
                <td width={100}>{course.courseNumber}</td>
                <td width={250}>{course.courseTitle}</td>
                <td width={200}>{course.sectionNumber}</td>
                <td width={60}>
                  <button
                    className="btn btn-outline-danger"
                    title="Delete"
                    onClick={() => {
                      setSelectedCourse({
                        subject: course.courseSubject,
                        number: course.courseNumber,
                        title: course.courseTitle,
                      });
                      openModal();
                    }}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modalOpen && (
        <Modal
          modalTitle={"Delete"}
          modalBody={
            <>
              <p>
                <i className="bi bi-exclamation-triangle-fill"> </i> Delete{" "}
                {selectedCourse.subject} {selectedCourse.number} (
                {selectedCourse.title}) from
              </p>
              <p>
                {faculty.firstName} {faculty.lastName} (ID# {faculty.instId})'s
                courses?
              </p>
            </>
          }
          modalClose={closeModal}
          modalAction={handleDelete}
          actionType="Delete"
        />
      )}
    </div>
  );
}

export default CourseMaintList;
