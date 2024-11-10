import React from "react";
import Animation from "./Animation";
import { Beef, Heart, Weight } from "lucide-react";
import Image from "next/image";

export default function Slide7() {
  return (
    <div className="text-#323F70 mt-8 flex gap-10 items-center justify-between">
      <div className="space-y-8">
        <Animation>
          <h2 className="text-#252832 text-6xl font-extrabold p-2">
            Chỉ Số Khối Cơ Thể (BMI)
          </h2>
        </Animation>
        <Animation className="space-y-1">
          <Heart className="size-12 text-#26A687" />
          <p className="font-extrabold text-4xl">Bình Thường</p>
          <p className="text-xl">BMI 18.5 - 24.9</p>
        </Animation>
        <Animation className="space-y-2">
          <Beef className="size-12 text-#26A687" />
          <p className="font-extrabold text-4xl">Thừa Cân</p>
          <p className="text-xl">BMI 25 - 29.9</p>
        </Animation>
        <Animation className="space-y-2">
          <Weight className="size-12 text-#26A687" />
          <p className="font-extrabold text-4xl">Béo Phì</p>
          <p className="text-xl">BMI 30 trở lên</p>
        </Animation>
      </div>
      <Animation>
        <Image
          alt="Image"
          src="/images/bmiIMG.webp"
          width={500}
          height={650}
          className="rounded-lg"
        />
      </Animation>
    </div>
  );
}
