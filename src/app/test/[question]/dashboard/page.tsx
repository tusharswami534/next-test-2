"use client";
import Slider from "@/components/home/Slider";
import Todo from "@/components/question-two/Todo";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const { question } = params;
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-3">
        <Link href={"/test/question-1/dashboard"} className="text-white">
          Question-1
        </Link>
        <Link href={"/test/question-2/dashboard"} className="text-white">
          Question-2
        </Link>
      </div>
      {question === "question-1" && <Slider />}
      {question === "question-2" && <Todo />}
    </>
  );
};

export default page;
