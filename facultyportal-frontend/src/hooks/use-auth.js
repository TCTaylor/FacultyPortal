const useAuth = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const userInfo = JSON.parse(token);
    const {
      id,
      instId,
      facultyId,
      userName,
      displayName,
      isAdmin,
      isEditor,
      isReadOnly,
    } = userInfo;

    const roles = [];
    if (isAdmin) roles.push("isAdmin");
    if (isEditor) roles.push("isEditor");
    if (isReadOnly) roles.push("isReadOnly");

    const accessorId = id;
    return {
      accessorId,
      instId,
      facultyId,
      userName,
      displayName,
      roles,
      isAdmin,
      isEditor,
      isReadOnly,
    };
  }

  return {};
};

export default useAuth;
