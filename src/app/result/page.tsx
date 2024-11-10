import Link from "next/link";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { name, rs } = searchParams;
  const resultText =
    rs === "1"
      ? "Người bệnh có nguy cơ cao mắc bệnh tiểu đường"
      : "Người bệnh có nguy cơ thấp mắc bệnh tiểu đường";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-#323F70">
      <div className="text-center max-w-lg p-8 rounded-lg shadow-lg bg-#D6F5EE bg-opacity-20 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4">Kết quả dự đoán</h1>
        <p className="text-xl mb-4">
          Chào, <span className="font-semibold">{name}</span>!
        </p>
        <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">{resultText}</h2>
        </div>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-#26A687 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
