function Error(error) {
  const renderSwitch = () => {
    // console.log(error.error);
    switch (error.error) {
      case 400:
        return (
          <div>
            <h1>400 Bad Request</h1>
            <p>This page isn't working at the moment.</p>
          </div>
        );
      case 403:
        return (
          <div>
            <h1>403 Forbidden</h1>
          </div>
        );
      case 404:
        return (
          <div>
            <h1>404 Not Found</h1>
            <p>The requested URL was not found.</p>
          </div>
        );
      case 500:
        return (
          <div>
            <h1>500 Internal Server Error</h1>
            <p>The server could not handle this request.</p>
          </div>
        );
      case 502:
        return (
          <div>
            <h1>502 Bad Gateway</h1>
          </div>
        );
      default:
        return (
          <div>
            <h1>Oops!</h1>
            <p>Something went wrong. Try again later.</p>
          </div>
        );
    }
  };

  return <div className="container mt-4">{renderSwitch()}</div>;
}

export default Error;
