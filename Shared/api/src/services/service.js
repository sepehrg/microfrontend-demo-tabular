import axios from "axios";

let isRefreshing = false;
let refreshSubscribers = [];
const baseUrl = "http://localhost:6403/api/v1"; // process.env.REACT_APP_API_URL;
const service = axios.create({
  baseURL: baseUrl,
});

service.interceptors.request.use(function (config) {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

service.interceptors.response.use(
  (res) => res,
  (error) => {
    const { config, response } = error;
    const originalRequest = config;
    if (response?.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        const data = {
          RefreshToken: getRefreshToken(),
        };
        const config = {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        };
        axios
          .post(baseUrl + "/Account/RefreshToken", data, config)
          .then((response) => {
            if (response.data.Success) {
              const user = response.data.Result;
              onRefreshed(user.access_token);
              localStorage.setItem("user", JSON.stringify(user));
              isRefreshing = false;
            } else {
              localStorage.removeItem("user");
              redirectTo(document, "/");
            }
          })
          .catch(() => {
            localStorage.removeItem("user");
            redirectTo(document, "/");
          });
      }
      const retryOrigReq = new Promise((resolve, reject) => {
        subscribeTokenRefresh((token) => {
          // replace the expired token and retry
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    } else {
      return response;
      // return Promise.reject(error);
    }
  }
);

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token) => {
  refreshSubscribers.map((cb) => cb(token));
};

const getRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return user.refresh_token;
  return null;
};

const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return user.access_token;
  return null;
};

const redirectTo = (document, path) => {
  document.location = path;
};

const get = (path, callback) => {
  return service
    .get(path)
    .then((response) => {
      if (response) callback(response.status, response.data);
    })
    .catch();
};

const getAsync = async (path) => {
  const res = await service.get(path);
  return res.data;
};

const patch = (path, payload, callback) => {
  return service
    .request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload,
    })
    .then((response) => {
      if (response) callback(response.status, response.data);
    });
};

const post = (path, payload, callback) => {
  return service
    .request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
    })
    .then((response) => {
      if (response) callback(response.status, response.data);
    });
};

const remove = (path, callback) => {
  return service
    .delete(path)
    .then((response) => callback(response.status, response.data));
};

export { get, getAsync, post, patch, remove };
