"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/common";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import UserLayout from "@/components/layouts/user-layout";

const FeedbackPage = () => {
  const [ratings, setRatings] = useState({
    easyToUse: null,
    staffClear: null,
    useAgain: null,
  });
  const [comment, setComment] = useState("");

  const handleRatingChange = (question: string, value: string) => {
    setRatings({
      ...ratings,
      [question]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the feedback data to your backend
    console.log("Feedback submitted:", { ratings, comment });
    alert("Thank you for your feedback!");
    // Redirect to home or confirmation page
  };

  return (
    <UserLayout className="!max-w-7xl">
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-[53px] font-bold font-el-messiri text-primary">
            Feedback
          </h1>
          <p className="text-lg font-medium text-Black90 mb-12">
            Thank you for supporting local restaurants
          </p>

          <div className="bg-white rounded-lg shadow-[0px_4.8px_16.8px_0px_#00000026] p-8 md:p-12 w-full">
            <h2 className="font-semibold text-Black90 mb-10 text-center">
              Tell us your dining experience tonight
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="">
                <FeedbackQuestion
                  question="Was it easy to use Super Mondays QR code?"
                  selected={ratings.easyToUse}
                  faceStart={"smile"}
                  onSelect={(value: string) =>
                    handleRatingChange("easyToUse", value)
                  }
                />

                <FeedbackQuestion
                  question="Did the restaurant staff indicated clearly what can be ordered on the main?"
                  selected={ratings.staffClear}
                  faceStart={"frowning"}
                  onSelect={(value: string) =>
                    handleRatingChange("staffClear", value)
                  }
                />

                <FeedbackQuestion
                  question="Would you use Super Mondays BOGO again?"
                  selected={ratings.useAgain}
                  faceStart={null}
                  onSelect={(value: string) =>
                    handleRatingChange("useAgain", value)
                  }
                />

                <div className="pt-4">
                  <Textarea
                    placeholder="Add a Comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="min-h-[100px] w-full bg-Gray50 border border-Gray200"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/" className="w-full flex-1 sm:w-auto">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full text-xs font-semibold text-primary border-primary"
                    >
                      Home
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="w-full flex-1 text-xs font-semibold sm:w-auto bg-primary text-white hover:bg-primary/90"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

interface Props {
  question: string;
  selected: null;
  faceStart: string | null;
  onSelect: (val: string) => void;
}

const FeedbackQuestion = ({
  question,
  selected,
  faceStart,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6">
      <p className="text-[13px] text-Black60 text-left">{question}</p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onSelect("happy")}
          className={`max-w-fit rounded-full flex items-center justify-center ${
            selected === "happy"
              ? "bg-yellow-100 border-2 border-yellow-400"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <Image
            src={
              faceStart === "smile"
                ? "/images/smiling-face.png"
                : "/images/frowning-face.png"
            }
            alt="QR Code"
            width={24}
            height={24}
          />
        </button>
        <button
          type="button"
          onClick={() => onSelect("neutral")}
          className={`max-w-fit rounded-full flex items-center justify-center ${
            selected === "neutral"
              ? "bg-gray-200 border-2 border-gray-400"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <Image
            src={
              faceStart === "frowning"
                ? "/images/frowning-face.png"
                : "/images/smiling-face.png"
            }
            alt="QR Code"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
