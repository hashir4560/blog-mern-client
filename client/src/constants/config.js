//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading",
    message: "Data is being Loaded ",
  },
  success: {
    title: "success",
    message: "Data Loaded Successfully ",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error Occurred while Fetching Response from the server .Please Try Again",
  },
  requestFailure: {
    title: "Error",
    message: "An error Occurred While parsing Request data",
  },
  networkError: {
    title: "Error",
    message:
      "Unable to Connect With the Server. Please Check Internet Connectivity and Try again later",
  },
};

//API SERVICE CALL

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
};
