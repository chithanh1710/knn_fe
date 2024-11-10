import React from "react";
import Animation from "./Animation";
import Image from "next/image";

export default function Slide3() {
  return (
    <section>
      <Animation>
        <h2 className="text-#323F70 text-6xl font-extrabold p-2">
          Nồng Độ Glucose
        </h2>
      </Animation>
      <div className={`flex mt-8 justify-between items-center gap-8`}>
        <div className="grid grid-cols-2 gap-4 w-[65%]">
          <Animation
            fitOrFull="w-full"
            className="p-6 rounded-lg text-#323F70 border border-#26A687 bg-#D6F5EE"
          >
            <p className="font-extrabold text-4xl">Dưới 100 mg/dL</p>
            <p className="text-xl font-light mt-1">Bình thường</p>
          </Animation>
          <Animation
            fitOrFull="w-full"
            className="p-6 rounded-lg text-#323F70 border border-#26A687 bg-#D6F5EE"
          >
            <p className="font-extrabold text-4xl">100-125 mg/dLL</p>
            <p className="text-xl font-light mt-1">Tiền tiểu đường</p>
          </Animation>
          <Animation
            fitOrFull="w-full"
            className="p-6 rounded-lg text-#323F70 border border-#26A687 bg-#D6F5EE col-span-2"
          >
            <p className="font-extrabold text-4xl">Trên 126 mg/dL</p>
            <p className="text-xl font-light mt-1">Tiểu đường</p>
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
