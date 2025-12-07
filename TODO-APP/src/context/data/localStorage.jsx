export const getlocalStorageData = () => {
  const taskItems = localStorage.getItem("reactTask");
  if (!taskItems) return [];
  return JSON.parse(taskItems);
};
export const setlocalStorageData = (state) => {
  return localStorage.setItem("reactTask", JSON.stringify(state.tasks));
};
