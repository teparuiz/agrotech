import axios from "axios";

const api = axios.create({});

export const HTTP = (
  method = "POST",
  url = "",
  data = {},
  accessToken = false
) => {
  return new Promise((resolve, reject) => {
    api({
      method: method,
      url: `${url}`,
      [method === "POST" ? "data" : "params"]: {
        ...data,
      },
      headers: {
        Authorization: accessToken,
      },
    })
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
