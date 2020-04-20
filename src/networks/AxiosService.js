import axios from "axios";
import { apiUrl } from "../config";

function getIRequestProp(severType, isMultipart) {
  const serverUrl = `${apiUrl}/`;
  // const token = JSON.parse(localStorage.getItem('token'));
  return {
    serverUrl: serverUrl,
    requestHeader: {
      "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
      "Accept-Language": "en-AU"
      // Authorization: `Bearer ${token}`
    }
  };
}

async function get(url, parameter, isLocalServer) {
  const { serverUrl, requestHeader } = getIRequestProp(isLocalServer);
  return axios.get(serverUrl + url, {
    params: parameter,
    headers: requestHeader
  });
}

const AxiosServices = {
  get
};

export default AxiosServices;
