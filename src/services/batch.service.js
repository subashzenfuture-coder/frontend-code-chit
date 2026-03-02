import api from "./api";

export const createBatch = async (data) => {
    try {
        const res = await api.post("" , data)
        return res.data;
    } catch (error) {
        throw error;
    }
}

