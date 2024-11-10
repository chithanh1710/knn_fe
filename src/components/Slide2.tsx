import React from "react";
import Animation1 from "./Animation1";
import Animation from "./Animation";

export default function Slide2() {
  return (
    <section>
      <Animation>
        <h2 className="text-#323F70 text-6xl font-extrabold p-2">
          Số lần mang thai
        </h2>
      </Animation>
      <Animation1 className="w-full py-48">
        <div className="w-full h-0.5 bg-#26A687 text-#323F70 font-extrabold text-3xl relative">
          <div className="size-10 absolute flex items-center justify-center -top-5 left-[25%] -translate-x-1/2 bg-#D6F5EE border-2 border-#26A687 rounded-md">
            <div className="relative">
              <p>1</p>
              <div className="absolute bg-#26A687 h-16 w-0.5 bottom-full left-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-[70px] w-60 text-center">
                <p>Ít hơn 3 lần</p>
                <p className="text-lg font-normal">Nguy cơ thấp</p>
              </div>
            </div>
          </div>
          <div className="size-10 absolute flex items-center justify-center -top-5 left-[50%] -translate-x-1/2 bg-#D6F5EE border-2 border-#26A687 rounded-md">
            <div className="relative">
              <p>2</p>
              <div className="absolute bg-#26A687 h-16 w-0.5 top-full left-1/2 translate-x-1/2"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-[70px] w-60 text-center">
                <p>3 - 6 lần</p>
                <p className="text-lg font-normal">Nguy cơ trung bình</p>
              </div>
            </div>
          </div>
          <div className="size-10 absolute flex items-center justify-center -top-5 left-[75%] -translate-x-1/2 bg-#D6F5EE border-2 border-#26A687 rounded-md">
            <div className="relative">
              <p>3</p>
              <div className="absolute bg-#26A687 h-16 w-0.5 bottom-full left-1/2 -translate-x-1/2"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-[70px] w-60 text-center">
                <p>Nhiều hơn 6 lần</p>
                <p className="text-lg font-normal">Nguy cơ cao</p>
              </div>
            </div>
          </div>
        </div>
      </Animation1>
    </section>
  );
}
