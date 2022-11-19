const useAuth = () => {
  const token = localStorage.getItem("token");
  let isAdmin = false;
  let isEditor = false;
  let isReadOnly = true;

  if (token) {
    const userInfo = JSON.parse(token);
    const { id, instId, role, userName, displayName } = userInfo;

    isAdmin = userInfo["isAdmin"];
    isEditor = userInfo["isEditor"];
    isReadOnly = userInfo["isReadOnly"];
    
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
