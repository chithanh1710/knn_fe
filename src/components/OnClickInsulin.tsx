"use client";
import { useState } from "react";
import Animation from "./Animation";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function OnClickInsulin() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="mt-4 text-#323F70">
      <Animation>
        <p
          onClick={() => setIsClick((prev) => !prev)}
          className="flex gap-2 items-center cursor-pointer"
        >
          {isClick ? (
            <ChevronDown className="text-#26A687" />
          ) : (
            <ChevronRight className="text-#26A687" />
          )}
          <span>Nồng độ insulin cao có thể là dấu hiệu của tiểu đường</span>
        </p>
      </Animation>
      {isClick && (
        <p className="max-w-[1000px] mt-4 pl-4 border-l-2 border-#26A687 ml-3">
          Insulin là một hormone quan trọng giúp điều chỉnh mức đường huyết. Khi
          cơ thể trở nên kháng insulin, nồng độ insulin sẽ tăng cao, đây là một
          dấu hiệu cảnh báo tiểu đường.
        </p>
      )}
    </div>
  );
}
