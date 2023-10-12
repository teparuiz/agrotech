import axios from "axios";

const api = axios.create({});

export const HTTP = (
  method = "POST",
  url = "",
  data = {},
  accessToken = false
) => {
  return new Promise((resolve, reject) => {
    const axiosConfig = {
      method: method,
      url: url,
      headers: {
        Authorization: accessToken,
      },
    };

    if (method === "GET" || method === "DELETE") {
      axiosConfig.params = data;
    } else {
      axiosConfig.data = data;
    }

    api(axiosConfig)
      .then(({ data }) => {
        return resolve(data);
      })
      .catch((err) => {
        if (err.response?.data?.status === 403)
          return (window.location.href = "/account/login");
        return reject(
          err?.response?.data || {
            error: true,
            message:
              "No tenemos comunicación con el servidor por favor intenta más tarde.",
            status: 401,
          }
        );
      });
  });
};
