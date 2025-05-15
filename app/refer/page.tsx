"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Copy,
  ChevronDown,
  Trash2,
  User,
  Mail,
  Send,
} from "lucide-react";
import Header from "@/components/common/header";
import { Footer } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserLayout from "@/components/layouts/user-layout";

export default function ReferPage() {
  return (
    <UserLayout>
      <div>
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 font-el-messiri">
          Refer & <span className="text-primary">Earn!</span>
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center italic text-sm text-Gray600 font-poppins mb-8">
          <Link href="/" className="hover:text-primary">
            Homepage
          </Link>
          <span className="mx-2">›</span>
          <span>Refer</span>
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-[40px] font-bold mb-12 font-el-messiri">
          Refer A Friend & Earn Rewards!
        </h2>

        {/* Referral Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden p-1 mb-10">
          {/* Image */}
          <div className="w-full h-48 md:h-64 relative">
            <Image
              src="/images/refer-image.png"
              alt="Refer friends"
              fill
              className="object-cover rounded-t-lg"
              priority
            />
          </div>

          {/* Content */}
          <div className="my-10">
            <p className="max-w-[630px] text-lg text-center font-poppins mb-8 mx-auto">
              Invite Your Friends To Join And Get{" "}
              <span className="text-primary">Exclusive Discounts</span> When
              They Sign Up.
            </p>

            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-6">
              {/* Your Referral */}
              <div>
                <p className="text-sm font-poppins text-LabelBlack mb-2">
                  Your Referral
                </p>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl py-1 px-3">
                  <div className="flex-1 flex items-center gap-2">
                    <User size={16} className="text-Black40" />
                    <span className="text-sm text-Black80">ABC123</span>
                  </div>
                  <Button className="bg-transparent  rounded-r-md p-2 hover:bg-transparent">
                    <Copy size={18} className="text-primary" />
                  </Button>
                </div>
              </div>

              {/* Invite by Email */}
              <div>
                <p className="text-sm font-poppins text-LabelBlack mb-2">
                  Invite by Email
                </p>
                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl py-1 px-3">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-Black40" />
                    <Input
                      type="email"
                      placeholder="Enter or paste email"
                      className="w-full flex-1 border-none focus:outline-none bg-transparent"
                    />
                  </div>
                  <Button className="bg-transparent  rounded-r-md p-2 hover:bg-transparent">
                    <Send size={18} className="text-primary" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referral History */}
        <div className="px-8 py-10 rounded-lg border border-gray-200 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold font-poppins">
              Referral Invites
            </h3>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search User"
                className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none"
              />
              <Search
                size={16}
                className="text-primary absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader className="!bg-transparent">
                <TableRow className="w-fullborder-b">
                  <TableHead className="text-left py-3 !px-0 font-medium text-gray-600">
                    Email
                  </TableHead>
                  <TableHead className="text-left py-3 font-medium text-gray-600">
                    <div className="flex items-center">
                      Date <ChevronDown size={16} className="ml-1" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left py-3 font-medium text-gray-600">
                    <div className="flex items-center">
                      Time <ChevronDown size={16} className="ml-1" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left py-3 font-medium text-gray-600">
                    <div className="flex items-center">
                      Status <ChevronDown size={16} className="ml-1" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left py-3 font-medium text-Gray600"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b">
                  <TableCell className="py-4 !px-0">
                    fecund_ninja_72@gmail.com
                  </TableCell>
                  <TableCell className="py-4">12/Aug/2024</TableCell>
                  <TableCell className="py-4">10:45 AM - 09:30 PM</TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-successDark rounded-full mr-2"></span>
                      <span className="text-successDark">Active</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <button className="text-Gray600 hover:text-gray-600">
                      <Trash2 size={18} />
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b">
                  <TableCell className="py-4 !px-0">
                    munificent_salad_58@gmail.com
                  </TableCell>
                  <TableCell className="py-4">12/Aug/2024</TableCell>
                  <TableCell className="py-4">10:45 AM - 09:30 PM</TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-dangerDark rounded-full mr-2"></span>
                      <span className="text-dangerDark">Cancelled</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-right">
                    <button className="text-Gray600 hover:text-Gray600">
                      <Trash2 size={18} />
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
