import React from "react";
import Animation1 from "./Animation1";
import Image from "next/image";
import Animation from "./Animation";

export default function Slide8() {
  return (
    <div className="text-#323F70 mt-8 flex gap-10 flex-row-reverse items-center justify-between">
      <div className="space-y-8">
        <Animation>
          <h2 className="text-#252832 text-6xl font-extrabold p-2">
            Lịch sử gia đình
          </h2>
        </Animation>

        <div className="flex gap-6 items-center">
          <Animation1>
            <div
              className="size-32 bg-#323F70 text-#D6F5EE flex items-center justify-center font-extrabold text-4xl"
              style={{
                clipPath:
                  "polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0, 50% 25%)",
              }}
            >
              1
            </div>
          </Animation1>
          <Animation>
            <p className="font-extrabold text-4xl">Không có</p>
            <p className="text-xl">Nguy cơ thấp</p>
          </Animation>
        </div>

        <div className="flex gap-6 items-center">
          <Animation1>
            <div
              className="size-32 bg-#323F70 text-#D6F5EE flex items-center justify-center font-extrabold text-4xl"
              style={{
                clipPath:
                  "polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0, 50% 25%)",
              }}
            >
              2
            </div>
          </Animation1>
          <Animation>
            <p className="font-extrabold text-4xl">Cha, mẹ hoặc anh chị em</p>
            <p className="text-xl">Nguy cơ tăng lên</p>
          </Animation>
        </div>

        <div className="flex gap-6 items-center">
          <Animation1>
            <div
              className="size-32 bg-#323F70 text-#D6F5EE flex items-center justify-center font-extrabold text-4xl"
              style={{
                clipPath:
                  "polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0, 50% 25%)",
              }}
            >
              3
            </div>
          </Animation1>
          <Animation>
            <p className="font-extrabold text-4xl">
              Nhiều thành viên trong gia đình
            </p>
            <p className="text-xl">Nguy cơ cao</p>
          </Animation>
        </div>
      </div>
      <Animation>
        <Image
          alt="Image"
          src="/images/familyTreeIMG.webp"
          width={500}
          height={1000}
          className="rounded-lg mix-blend-darken"
        />
      </Animation>
    </div>
  );
}
