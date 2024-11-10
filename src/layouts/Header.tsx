import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-#26A687 h-16 flex justify-between items-center px-6 text-white">
      <h1 className="text-2xl font-bold">Dự Đoán Bệnh Tiểu Đường</h1>
      <nav className="flex-shrink-0">
        <ul className="flex flex-row gap-10 items-center">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link
              href="/predict"
              className="inline-block px-4 py-2 bg-#D6F5EE rounded text-#323F70 font-bold transition-all hover:text-black hover:bg-white"
            >
              Dự Đoán
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
