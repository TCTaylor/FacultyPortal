import useAuth from "../../hooks/use-auth";

import { useState, useEffect } from "react";
import axios from "axios";

import DfltProfileImg from "../../assets/user-profile-icon-free-vector.webp";
import "./profile-image.styles.css";
import Modal from "../modal/modal.component";

const API_BASE_URL = "https://localhost:7078/api";

function ProfileImage() {
  const [profileImgData, setProfileImgData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const { accessorId } = useAuth();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileSelected = (e) => {
    e.preventDefault();
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileUpload = async (e) => {
    console.log("file upload command received");
    // e.preventDefault();
    // const id = profileImgData[0].id;
    // const accessorId = profileImgData[0].accessorId;
    // const imagePath = selectedFile;
    // axios
    //   .put(API_BASE_URL + "/ProfileImages/" + id, { id, accessorId, imagePath })
    //   .catch((error) => {
    //     setError(error);
    //     console.log(error);
    //   });
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/ProfileImages/" + accessorId)
      .then((response) => {
        setProfileImgData(response.data);
        console.log(response.data)
        setSelectedFile(URL.createObjectURL(profileImgData[0].imagePath));
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div>
      {modalOpen && (
        <Modal
          modalTitle={"Upload Profile Image"}
          modalBody={
            <>
              <img
                className="mb-4"
                alt="Profile image"
                src={selectedFile ? selectedFile : DfltProfileImg}
                width={200}
              />
              <input
                type="file"
                className="form-control"
                onChange={handleFileSelected}
              />
            </>
          }
          modalClose={closeModal}
          modalSave={handleFileUpload}
        />
      )}
      <div className="profile-img">
        <img
          alt="Profile image"
          src={selectedFile ? selectedFile : DfltProfileImg}
        />
        <button
          type="button"
          className="btn-edit btn btn-outline-dark"
          title="Change profile pic"
          onClick={openModal}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
