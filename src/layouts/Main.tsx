import Animation from "@/components/Animation";
import { Hero } from "@/components/Hero";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";
import Slide6 from "@/components/Slide6";
import Slide7 from "@/components/Slide7";
import Slide8 from "@/components/Slide8";

export default function Main() {
  return (
    <main className="space-y-16 my-16">
      <div className="max-w-[1300px] mx-auto">
        <Hero />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto">
        <Slide2 />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto">
        <Slide3 />
      </div>
      <div className="w-full bg-#26A687 py-16">
        <Slide4 />
      </div>
      <div className="max-w-[1300px] mx-auto">
        <Slide5 />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto">
        <Slide6 />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto">
        <Slide7 />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto">
        <Slide8 />
      </div>
      <BreakLine />
      <div className="max-w-[1300px] mx-auto space-y-4">
        <Animation>
          <h2 className="text-#252832 text-6xl font-extrabold p-2">Độ Tuổi</h2>
        </Animation>
        <Animation fitOrFull="w-full">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-#26A687 text-#D6F5EE">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Độ tuổi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Nguy cơ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-#323F70">
                  Dưới 45 tuổi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  Nguy cơ thấp
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-#323F70">
                  45-64 tuổi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">
                  Nguy cơ trung bình
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-#323F70">
                  Trên 64 tuổi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  Nguy cơ cao
                </td>
              </tr>
            </tbody>
          </table>
        </Animation>
      </div>
    </main>
  );
}

function BreakLine() {
  return <hr className="h-0.5 w-full bg-#26A687" />;
}
