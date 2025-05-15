
import { toast } from "react-toastify";

export const SuccessToast = (message: string) => {
  return toast.success(<p className="!ml-2">{message || "Successfull"}</p>);
};

export const ErrorToast = (message: string) => {
  return toast.error(
    <p className="!ml-2">{message || "Something went wrong"}</p>
  );
};
