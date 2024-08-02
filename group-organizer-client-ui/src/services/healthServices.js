import http from "../common/httpCommon";

export const getHealth = async () => {
  const result = await http.get("/groups");
  return result;
};

export const create = async (data = {}) => {
  const result = await http.post("/groups", data);
  return result;
};
