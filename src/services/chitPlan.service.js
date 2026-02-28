import api from "./api";

// ================= CREATE =================
export const createPlans = async (data) => {
  try {
    const res = await api.post("/plans/create", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ================= GET =================
export const getPlans = async () => {
  try {
    const res = await api.get("/plans");
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ================= UPDATE =================
// ✅ FIXED: id FIRST, data SECOND
export const updatePlans = async (id, data) => {
  try {
    const res = await api.put(`/plans/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// ================= DELETE =================
export const deletePlans = async (id) => {
  try {
    const res = await api.delete(`/plans/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};