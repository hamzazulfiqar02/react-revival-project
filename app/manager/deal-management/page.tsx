"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  Edit,
  Handshake,
  Trash2,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { SectionHeader } from "@/components/screens/manager/section-header";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/screens/manager/data-table";
import { dealsData } from "@/constants/dashboard";
import {
  AddSearchFilter,
  CustomSelect,
  DaySelector,
  MediaUpload,
  Pagination,
} from "@/components/common";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectViewport } from "@radix-ui/react-select";
import { cuisineOptions } from "@/constants/dashboard";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Sample deal data

export default function DealManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDays, setSelectedDays] = useState<string[]>(["mon"]);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [formData, setFormData] = useState({
    dealType: "",
    cuisineType: "",
    date: "",
    time: "",
    status: "Active",
  });

  const columns = [
    { key: "dealType", header: "Deal Type", width: "20%" },
    { key: "cuisineType", header: "Cuisine Type", width: "20%" },
    { key: "date", header: "Date", width: "15%" },
    { key: "time", header: "Time", width: "20%" },
    {
      key: "status",
      header: "Status",
      width: "10%",
      render: (value: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-successLight text-successDark"
              : "bg-warningLight text-warningDark"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      width: "15%",
      render: (_: any, row: any) => (
        <div className="flex space-x-2">
          <Button
            onClick={() => handleEdit(row.id)}
            className="text-xs flex items-center gap-1 px-2 h-8 rounded-md bg-warningDark text-white hover:bg-warningDark"
          >
            <Edit className="!w-3 !h-3" />
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(row.id)}
            className="text-xs flex items-center gap-1 px-2 h-8 rounded-md bg-dangerDark text-white hover:bg-dangerDark"
          >
            <Trash2 className="!w-3 !h-3" />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit deal ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete deal ${id}`);
  };

  const handleBack = () => {
    setSelectedLevel(0);
  };

  const handleCreateDeal = () => {
    console.log("Creating deal:", formData);
    setSelectedLevel(1);
    if (selectedLevel === 1) {
      setSelectedLevel(0);
      setIsCreateModalOpen(false);
      setFormData({
        dealType: "",
        cuisineType: "",
        date: "",
        time: "",
        status: "Active",
      });
    }
  };

  return (
    <DashboardLayout type={"manager"}>
      <div className="space-y-6">
        <SectionHeader
          title="Manage your deals"
          // subtitle="Manage your deals"
        />

        <AddSearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          actionBtnText="Create New Deal"
          isActionBtn={true}
          onAdd={() => setIsCreateModalOpen(true)}
        />

        <DataTable columns={columns} data={dealsData} className="bg-white" />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={1}
        />
      </div>

      {/* Create Deal Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold font-poppins">
                Create a new Deal
              </h2>
              <button
                onClick={() => {
                  setSelectedLevel(0);
                  setIsCreateModalOpen(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* content */}
            {selectedLevel === 0 ? (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="cuisineType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cuisine Type
                    </label>

                    <CustomSelect
                      options={cuisineOptions}
                      placeholder="Select Cuisine Type"
                      value={cuisineType}
                      onChange={setCuisineType}
                      icon={<UtensilsCrossed size={16} />}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="dealType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Deal Type
                    </label>
                    <Select
                      value={formData.cuisineType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, cuisineType: value })
                      }
                    >
                      <SelectTrigger
                        id="cuisineType"
                        className="h-11 w-full px-3 py-2 !text-xs !text-Gray700 border border-Gray200 rounded-md !focus:outline-primary focus:border-primary"
                      >
                        <div className="flex items-center gap-2">
                          <Handshake className="w-4 h-4 text-Gray600" />
                          <SelectValue placeholder="Select Cuisine Type" />
                        </div>
                        {/* <ChevronDown />{" "} */}
                        {/* You can use any icon of your choice */}
                      </SelectTrigger>

                      <SelectContent>
                        <SelectScrollUpButton />
                        <SelectViewport>
                          <SelectGroup>
                            <SelectItem value="BOGO">
                              <SelectLabel>BOGO</SelectLabel>
                            </SelectItem>
                            <SelectItem value="Happy Hour">
                              <SelectLabel>Happy Hour</SelectLabel>
                            </SelectItem>
                          </SelectGroup>
                        </SelectViewport>
                        <SelectScrollDownButton />
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Select Days */}
                <div className="mt-6">
                  <DaySelector
                    value={selectedDays}
                    onValueChange={setSelectedDays}
                    label="Select Days"
                  />
                </div>

                <div className="flex flex-row items-center gap-4 mt-10">
                  <label className="block text-sm font-medium text-Black100">
                    Select Status
                  </label>
                  <div className="flex space-x-4">
                    <RadioGroup
                      value={formData.status}
                      onValueChange={(value) =>
                        setFormData({ ...formData, status: value })
                      }
                      className="flex space-x-4"
                    >
                      <div className="inline-flex items-center">
                        <RadioGroupItem
                          value="Active"
                          id="active"
                          className="h-4 w-4 !text-primary border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor="active"
                          className="ml-2 text-xs text-Gray2"
                        >
                          Active
                        </label>
                      </div>
                      <div className="inline-flex items-center">
                        <RadioGroupItem
                          value="Pending"
                          id="pending"
                          className="h-4 w-4 !text-primary border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor="pending"
                          className="ml-2 text-xs text-Gray2"
                        >
                          Pending
                        </label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 p-6">
                <div
                  onClick={handleBack}
                  className="max-w-fit rounded-full p-1 cursor-pointer bg-primary"
                >
                  <ArrowLeft className="text-white" />
                </div>
                <MediaUpload />
              </div>
            )}

            {/* footer */}
            <div className="flex justify-between px-4 pb-4 gap-4">
              <Button
                onClick={() => setIsCreateModalOpen(false)}
                variant="outline"
                className="flex-1 border-primary text-primary rounded-xl"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateDeal}
                className="flex-1 bg-primary hover:bg-primary text-white rounded-xl"
              >
                {selectedLevel === 0 ? "Next" : "Create Deal"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
