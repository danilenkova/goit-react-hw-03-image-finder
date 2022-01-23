import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NOT_ALERTS = {
  EMPTY: "Enter your search phrase",
  NO_VALID: "Use Latin letters in your request!",
  NOT_FOUND: "No images found",
  FETCH_ERROR: "Database access error",
  END: "No more images",
};

export const myAlert = (message) => {
  return toast.error(message, {
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    theme: "colored",
  });
};
