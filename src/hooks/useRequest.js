import { useNavigate } from "react-router-dom";
import { message } from "antd";
const { REACT_APP_BASE_URL } = process.env;
const useRequest = () => {
  const navigate = useNavigate();
  const warning = (err) => {
    message.warning(err || "Error");
  };
  const request = async ({
    url,
    method = "GET",
    body,
    token,
    headers = {},
  }) => {
    if (method == "POST") headers["Content-Type"] = "application/json";
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    const options = {
      method,
      headers,
      body: JSON.stringify(body),
    };
    try {
      let res = await fetch(`${REACT_APP_BASE_URL}${url}`, options).then(
        (res) => res.json()
      );
      return res;
    } catch (err) {
      warning(err);
      return err;
    }
  };
  return request;
};
export default useRequest;
