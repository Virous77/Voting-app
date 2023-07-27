export const getLocalData = (name) => {
  const findLocalData = localStorage.getItem(name);
  return findLocalData ? JSON.parse(findLocalData) : null;
};

export const tabs = [
  {
    id: 1,
    name: "Voting Running",
    value: "running",
  },
  {
    id: 2,
    name: "Create Voting",
    value: "create",
  },
  {
    id: 3,
    name: "Voting Completed",
    value: "complete",
  },
];
