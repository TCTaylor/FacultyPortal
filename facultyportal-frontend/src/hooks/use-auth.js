const useAuth = () => {
  const token = localStorage.getItem("token");
  let isAdmin = false;
  let isEditor = false;
  let status = "ReadOnly";

  if (token) {
    const userInfo = JSON.parse(token);
    const { instId, role, userName, displayName } = userInfo;

    isAdmin = userInfo["isAdmin"];
    isEditor = userInfo["isEditor"];

    if (isAdmin) status = "Admin";
    if (isEditor) status = "Editor";

    // console.log(instId, userName, displayName, status, isAdmin, isEditor);

    return {
      instId,
      role,
      userName,
      displayName,
      status,
      isAdmin,
      isEditor,
    };
  }

  return {};
};

export default useAuth;
