import "./loading.styles.css";

function Loading() {
  return (
    <div className="loading-container">
      <div
        className="spinner-border"
        style={{ width: "40px", height: "40px" }}
        role="status"
      ></div>
    </div>
  );
}

export default Loading;
