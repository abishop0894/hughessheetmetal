"use client";
import { ThreeDMarquee } from "../ui/Marquee3d";
import { useMemo } from "react";

export function ThreeDMarqueeDemo() {
  const images = useMemo(() => {
    return [
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
   "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
    "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
  ];
}, []);
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
