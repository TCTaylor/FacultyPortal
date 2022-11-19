import useAuth from "../../hooks/use-auth";

import { useState, useEffect } from "react";
import axios from "axios";

import DfltProfileImg from "../../assets/user-profile-icon-free-vector.webp";
import "./profile-image.styles.css";
import Modal from "../modal/modal.component";

const API_BASE_URL = "https://localhost:7078/api";

function ProfileImage() {
  const [profileImgData, setProfileImgData] = useState({});
  const [profileImg, setProfileImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [error, setError] = useState(null);

  const { accessorId } = useAuth();

  useEffect(() => {
    // axios
    //   .get(API_BASE_URL + "/ProfileImages/" + accessorId)
    //   .then((response) => {
    //     setProfileImgData(response.data);
    //     setProfileImg(response.data.imagePath);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     setError(error);
    //   });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileSelected = (e) => {
    e.preventDefault();
    setProfileImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const id = profileImgData.id;
    const accessorId = profileImgData.accessorId;
    const imagePath = profileImg;
    // axios
    //   .put(API_BASE_URL + "/ProfileImages/" + id, { id, accessorId, imagePath })
    //   .catch((error) => {
    //     setUploadError(error);
    //   });
    setModalOpen(false);
  };

  return (
    <div>
      <div className="profile-img">
        <img
          alt="Profile image"
          src={profileImg ? profileImg : DfltProfileImg}
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
      {modalOpen && (
        <Modal
          modalTitle={"Upload Profile Image"}
          modalBody={
            <>
              <img
                className="mb-4"
                alt="Profile image"
                src={profileImg ? profileImg : DfltProfileImg}
                width={200}
              />
              <input
                type="file"
                className="form-control"
                onChange={handleFileSelected}
              />
              {uploadError && (
                <span className="badge text-bg-danger">
                  Failed to upload file
                </span>
              )}
            </>
          }
          modalClose={closeModal}
          modalAction={handleFileUpload}
          actionType={"Save"}
        />
      )}
    </div>
  );
}

export default ProfileImage;
