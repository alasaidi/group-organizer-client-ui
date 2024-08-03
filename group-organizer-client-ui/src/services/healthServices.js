import http from "../common/httpCommon";

export const getHealth = async () => {
  const result = await http.get("/groups");
  return result;
};

export const create = async (data = {}) => {
  try {
    const result = await http.post("/groups", data);
    return result;
  } catch (error) {
    console.error("Error creating group:", error.response?.data || error.message);
    throw error;
  }
};
