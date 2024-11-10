import Image from "next/image";
import Animation from "./Animation";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex justify-between">
      <div className="mt-10 ml-6">
        <Animation>
          <h1 className="text-#323F70 text-7xl font-extrabold p-2">
            Phát Hiện Sớm
            <br />
            Tiểu Đường
          </h1>
        </Animation>
        <Animation className="mt-4">
          <p className="text-#323F70">
            Làm Bài kiểm tra ngay để biết nguy cơ mắc bệnh tiểu đường của bạn.
          </p>
        </Animation>
        <div className="flex gap-2 mt-10">
          <Animation>
            <Link
              href="/predict"
              className="inline-block px-4 py-2 rounded-md text-xl text-white font-bold bg-#26A687 border-2 border-#26A687"
            >
              Bắt đầu kiểm tra
            </Link>
          </Animation>
        </div>
      </div>
      <Animation>
        <Image
          alt=""
          src="/images/heroIMG.png"
          className="mix-blend-darken"
          width={500}
          height={500}
        />
      </Animation>
    </section>
  );
}
