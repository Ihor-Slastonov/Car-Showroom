export const getLocalStoredData = key => {
  try {
    const storedData = localStorage.getItem(key);
    if (!storedData) return [];
    return JSON.parse(storedData);
  } catch (error) {
    return [];
  }
};

export const setLocalStoredData = (key, newData) => {
  const parsedData = getLocalStoredData(key);
  const updatedData = [...parsedData, newData];

  localStorage.setItem(key, JSON.stringify(updatedData));
};
