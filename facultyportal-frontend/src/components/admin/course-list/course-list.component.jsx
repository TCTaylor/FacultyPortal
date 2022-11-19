import Modal from "../../modal/modal.component";

import { useState } from "react";
import { Link } from "react-router-dom";

function CourseMaintList({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("delete action heard");
  };

  return (
    <div>
      <div style={{ float: "right", paddingRight: "20px" }}>
        <Link to={"/courses-maint" + "/add"}>
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
                <td>{course.courseSubject}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseTitle}</td>
                <td>{course.sectionNumber}</td>
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
                {selectedCourse.title}) from [Faculty Member]'s courses?
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
