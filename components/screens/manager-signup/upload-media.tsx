import { MediaUpload } from "@/components/common";
import { Button } from "@/components/ui/button";
import React from "react";

const UploadMedia = ({ onHandleNext }: any) => {
  return (
    <div>
      <MediaUpload />
      {/* Submit button */}
      <Button
        type="submit"
        className="text-sm font-semibold w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        onClick={onHandleNext}
      >
        Submit For Approval
      </Button>
    </div>
  );
};

export default UploadMedia;
