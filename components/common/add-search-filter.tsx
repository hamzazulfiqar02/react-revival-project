import { ListFilter, Plus, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SearchFilter from "./search-filter";

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  actionBtnText?: string;
  isActionBtn?: boolean;
  onAdd?: () => void;
}

const AddSearchFilter = ({
  searchQuery,
  setSearchQuery,
  actionBtnText,
  isActionBtn = false,
  onAdd,
}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isActionBtn && (
        <Button
          className="text-xs font-semibold font-poppins bg-primary hover:bg-primary/90 text-white"
          onClick={() => onAdd?.()}
        >
          <Plus className="text-white" /> {actionBtnText}
        </Button>
      )}
    </div>
  );
};

export default AddSearchFilter;
