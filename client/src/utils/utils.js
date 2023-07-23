export const getLocalData = (name) => {
  const findLocalData = localStorage.getItem(name);
  return findLocalData ? JSON.parse(findLocalData) : null;
};
