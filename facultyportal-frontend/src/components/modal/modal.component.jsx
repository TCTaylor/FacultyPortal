import "./modal.styles.css";

function Modal({ modalTitle, modalBody, modalClose, modalSave }) {
  return (
    <div className="fp-modal-background">
      <div className="fp-modal-container">
        <button className="header-close-btn" onClick={modalClose}>
          <i className="bi bi-x"></i>
        </button><br />
        <div className="fp-modal-title">
          <h3>{modalTitle}</h3>
        </div>
        <div className="fp-modal-body" style={{ textAlign: "center" }}>
          {modalBody}
        </div>
        <div className="fp-modal-footer">
          <button className="btn btn-secondary m-1" onClick={modalClose}>Cancel</button>
          <button className="btn btn-danger m-1" onClick={modalSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
