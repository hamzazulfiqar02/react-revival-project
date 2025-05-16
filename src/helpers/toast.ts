
import { toast } from "react-toastify";

export const toast = {
  success: (message: string) => {
    return toast.success(<p className="!ml-2">{message || "Successful"}</p>);
  },
  
  error: (message: string) => {
    return toast.error(<p className="!ml-2">{message || "Something went wrong"}</p>);
  }
};
