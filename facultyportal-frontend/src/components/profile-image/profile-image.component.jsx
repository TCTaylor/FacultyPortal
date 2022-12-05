import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../api/api";
import useAuth from "../../hooks/use-auth";
import axios from "axios";

import DfltProfileImg from "../../assets/user-profile-icon-free-vector.webp";
import Modal from "../modal/modal.component";
import "./profile-image.styles.css";

function ProfileImage() {
  const [profileImgData, setProfileImgData] = useState({});
  const [profileImg, setProfileImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const { accessorId } = useAuth();

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/ProfileImages/" + accessorId)
      .then((response) => {
        setProfileImgData(response.data);
        setProfileImg(response.data.imagePath);
      })
      .catch((error) => {
        // console.log(error)
        setProfileImg(DfltProfileImg);
      });
  }, [accessorId]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUploadError(null);
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
    axios
      .put(API_BASE_URL + "/ProfileImages/" + id, { id, accessorId, imagePath })
      .then(() => {
        setModalOpen(false);
      })
      .catch((error) => {
        setUploadError(error);
      });
  };

  return (
    <div>
      <div className="profile-img">
        <img alt="Profile" src={profileImg ? profileImg : DfltProfileImg} />
        <button
          type="button"
          className="btn-edit btn btn-dark"
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
                alt="Profile"
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
