import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json, text/plain;",
    Accept: "application/json, text/plain"
  }
})

axiosInstance.interceptors.request.use(async (request) =>{return request})

async function callAPI (url, method, headers, body){
  try {
    const options = {
      method,
      url,
      headers: headers,
    }
    if (method !== "GET" && body){
      options.data = body
    }
    const response = await axiosInstance(options)
    return response; 
  } catch (error) {
    console.error("Error in calling API ", url, method, headers, body);
    throw error;
  }
}

export const GET = (url, headers = {}) => callAPI(url, "GET", headers);