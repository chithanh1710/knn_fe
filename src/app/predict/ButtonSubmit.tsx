"use client";

import { useFormStatus } from "react-dom";

export default function ButtonSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2 px-4 bg-#26A687 text-white rounded-md font-semibold"
    >
      {pending ? "Đang thực hiên" : "Gửi"}
    </button>
  );
}
