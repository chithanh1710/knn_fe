import React from "react";
import Animation from "./Animation";
import Image from "next/image";

export default function Slide5() {
  return (
    <section>
      <Animation>
        <h2 className="text-#323F70 text-6xl font-extrabold p-2">Độ Dày Da</h2>
      </Animation>
      <div
        className={`flex flex-row-reverse mt-8 justify-between items-center gap-8`}
      >
        <div className="flex flex-col gap-4 w-[65%]">
          <Animation
            fitOrFull="w-full"
            className="p-6 rounded-lg text-#323F70 border border-#26A687 bg-#D6F5EE"
          >
            <p className="font-extrabold text-4xl">Dưới 29 mm</p>
            <p className="text-xl font-light mt-1">Bình thường</p>
          </Animation>
          <Animation
            fitOrFull="w-full"
            className="p-6 rounded-lg text-white bg-#26A687"
          >
            <p className="font-extrabold text-4xl">Trên 29 mm</p>
            <p className="text-xl font-light mt-1">
              Có thể là dấu hiệu của tiểu đường
            </p>
          </Animation>
        </div>
        <Animation className="w-[35%]">
          <Image
            className="w-full h-full rounded-lg shadow-md"
            alt="Ảnh"
            src="/images/glucoseIMG.png"
            width={300}
            height={300}
          />
        </Animation>
      </div>
    </section>
  );
}
