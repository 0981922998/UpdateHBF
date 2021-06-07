import axiosClient from "./axiosClient";

const listRequestApi = {
  getAll: (filters) => {
    const url = "/requests/show-my-request";
    return axiosClient.get(url, { params: filters.payload.params });
  },

  get: (id) => {
    const url = `/requests/${id}`;
    return axiosClient.get(url);
  },
 
};
export default listRequestApi;
