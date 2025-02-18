import Slider from "@/components/home/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10">
        <Link href={"/test/question-1/dashboard"} className="text-white">
          Question-1
        </Link>
        <Link href={"/test/question-2/dashboard"} className="text-white">
          Question-2
        </Link>
      </div>
    </>
  );
}
