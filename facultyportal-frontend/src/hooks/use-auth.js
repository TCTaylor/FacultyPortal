const useAuth = () => {
  // console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  let isAdmin = false;
  let isEditor = false;
  let isReadOnly = true;

  if (token) {
    const userInfo = JSON.parse(token);
    const { id, instId, role, userName, displayName } = userInfo;

    isAdmin = userInfo["isAdmin"];
    isEditor = userInfo["isEditor"];
    isEditor = userInfo["isReadOnly"];
    // isReadOnly = userInfo["isReadOnly"];

    // console.log(id, instId, userName, displayName, isAdmin, isEditor, isReadOnly);
    const accessorId = id;
    return {
      accessorId,
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
