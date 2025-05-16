
import { toast as reactToast } from "react-toastify";

// Toast object with methods
export const toast = {
  success: (message: string) => {
    return reactToast.success(message || "Successful");
  },
  
  error: (message: string) => {
    return reactToast.error(message || "Something went wrong");
  }
};

// Individual toast functions for backward compatibility
export const SuccessToast = (message: string) => {
  return reactToast.success(message || "Successful");
};

export const ErrorToast = (message: string) => {
  return reactToast.error(message || "Something went wrong");
};
