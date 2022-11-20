import Modal from "../../modal/modal.component";
import Loading from "../../loading/loading.component";
import Error from "../../error/error.component";

import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

function FacultyList({ faculty }) {
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    axios
      .delete(API_BASE_URL + "/Faculty/" + selectedFaculty.id)
      .then((response) => {
        if (response) window.location.reload(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error.response.status} />;
  }

  return (
    <div>
      <div style={{ float: "right", paddingRight: "15px" }}>
        <Link to={"/faculty-maint/" + "add"}>
          <button className="btn btn-primary" title="Add">
            <i className="bi bi-plus-lg"> </i>
            Add Faculty
          </button>
        </Link>
      </div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">M. I.</th>
            <th scope="col">Suffix</th>
            <th scope="col">Division</th>
            <th scope="col">Qualifications</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((fac) => {
            return (
              <tr key={fac.id}>
                <td>{fac.instId}</td>
                <td>{fac.firstName}</td>
                <td>{fac.lastName}</td>
                <td>{fac.midInit}</td>
                <td>{fac.suffix}</td>
                <td>{fac.divisionId}</td>
                <td>
                  <table>
                    <tbody>
                      {fac.qualifications.map((qual) => {
                        return (
                          <tr key={qual.id}>
                            <td>{qual.credential}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
                <td>
                  <Link to={"/courses-maint/" + fac.id}>
                    <button
                      className="btn btn-outline-dark"
                      title="Edit Courses"
                    >
                      <i className="bi bi-journals"> </i>
                      Courses
                    </button>
                  </Link>
                </td>
                <td width={60}>
                  <Link to={"/faculty-maint/" + fac.id}>
                    <button className="btn btn-dark" title="Edit">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </Link>
                </td>
                <td width={60}>
                  <Link>
                    <button
                      className="btn btn-outline-danger"
                      title="Delete"
                      onClick={() => {
                        setSelectedFaculty({
                          id: fac.id,
                          instId: fac.instId,
                          firstName: fac.firstName,
                          midInit: fac.midInit,
                          lastName: fac.lastName,
                          suffix: fac.suffix,
                        });
                        openModal();
                      }}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </Link>
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
                {selectedFaculty.firstName} {selectedFaculty.midInit}.{" "}
                {selectedFaculty.lastName} {selectedFaculty.suffix} (ID#{" "}
                {selectedFaculty.instId})?
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

export default FacultyList;
