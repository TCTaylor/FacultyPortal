import "./loading.styles.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-border" role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
