
import { toast as reactToast } from "react-toastify";

export const toast = {
  success: (message: string) => {
    return reactToast.success(message || "Successful");
  },
  
  error: (message: string) => {
    return reactToast.error(message || "Something went wrong");
  }
};
