const useAuth = () => {
  // console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  let isAdmin = false;
  let isEditor = false;
  let isReadOnly = true;

  if (token) {
    const userInfo = JSON.parse(token);
    const { instId, role, userName, displayName } = userInfo;

    isAdmin = userInfo["isAdmin"];
    isEditor = userInfo["isEditor"];
    isEditor = userInfo["isReadOnly"];
    // isReadOnly = userInfo["isReadOnly"];

    // console.log(instId, userName, displayName, isAdmin, isEditor, isReadOnly);

    return {
      instId,
      role,
      userName,
      displayName,
      isAdmin,
      isEditor,
      isReadOnly,
    };
  }

  return {};
};

export default useAuth;
