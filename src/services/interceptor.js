import axios from "axios";
import Swal from "sweetalert2";

var generalErrMsg = "There appears to be a problem right now. Please try again later.";

export default {
  setupInterceptors: (history, toggleLoader) => {
    axios.interceptors.request.use((config) => {
      if (!config.preventLoading) toggleLoader(true);
      // config.headers = { "Content-Type": "application/json" };

      return config;
    });

    axios.interceptors.response.use(
      (response) => {
        toggleLoader(false);

        if (response && response.data) {
          if (response.data.needsLogin) {
            localStorage.clear();
            document.location.href = "/sessions/login";
            return;
          } else if (response.data.err) {
            Swal.fire("", generalErrMsg, "warning");
          }
        }

        return response;
      },
      (error) => {
        toggleLoader(false);

        if (error.request && error.request.status === 429) {
          Swal.fire("", "Too many requests made", "warning").then(() => {
            window.location.href = "/";
          });
        } else {
          Swal.fire("", generalErrMsg, "warning");
        }
        return error;
      }
    );
  }
};
