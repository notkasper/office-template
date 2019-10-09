import request from "superagent";

const handleResponse = (error, response, callback) => {
  if (response.status === 401) {
    setLocation("login");
  }
  callback(error, response);
};

export const testApi = callback => {
  request
    .get("/api/test")
    .end((error, response) => handleResponse(error, response, callback));
};

export const oauth = callback => {
  request
    .get("/api/oauth")
    .end((error, response) => handleResponse(error, response, callback));
};

export const getUserDetails = callback => {
  request
    .get("/api/getUserDetails")
    .end((error, response) => handleResponse(error, response, callback));
};

export const getProfiles = callback => {
  request
    .get("/api/profiles")
    .end((error, response) => handleResponse(error, response, callback));
};

export const getEstablishments = callback => {
  request
    .get("/api/establishments")
    .end((error, response) => handleResponse(error, response, callback));
};

export const getDepartments = callback => {
  request
    .get("/api/departments")
    .end((error, response) => handleResponse(error, response, callback));
};

export const deleteProfile = (id, callback) => {
  request
    .delete(`/api/profile/${id}`)
    .end((error, response) => handleResponse(error, response, callback));
};

export const putProfile = (profileData, callback) => {
  request
    .put("/api/profile")
    .send(profileData)
    .end((error, response) => handleResponse(error, response, callback));
};

export const updateProfile = (id, profileData, callback) => {
  request
    .patch(`/api/profile/${id}`)
    .send(profileData)
    .end((error, response) => handleResponse(error, response, callback));
};
