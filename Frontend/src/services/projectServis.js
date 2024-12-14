import http from "./httpService";

export default function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.remove(`/project/${id}`).then(({ data }) => data.data);
}

export function createProjectApi(data) {
  return http.post(`project/add`, data).then(({ data }) => data.data);
}

export function editProjectApi({ id, newProject }) {
  return http
    .patch(`project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function toggleProjectStatusApi({ id, data }) {
  return http.patch(`project/${id}`, data).then(({ data }) => data.data);
}

export function getSingleProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function getProjectsApi(queryString) {
  return http.get(`/project/list${queryString}`).then(({ data }) => data.data);
}