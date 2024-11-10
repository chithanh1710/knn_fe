"use server";
import { redirect } from "next/navigation";

const URL = process.env.URL || "http://127.0.0.1:5000";

export async function submitForm(formData: FormData) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const json: Record<string, any> = {};

  // Lọc các trường không cần thiết
  formData.forEach((value, key) => {
    if (key !== "name" && !key.includes("$ACTION_ID")) {
      json[key] = value;
    }
  });

  const name = formData.get("name");

  let redirectPath = "#";
  try {
    // Gửi yêu cầu POST đến API
    const res = await fetch(URL + "predict", {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Kiểm tra phản hồi của API
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    // Phân tích kết quả trả về
    const data = await res.json();
    console.log("Response Data:", data);

    redirectPath = `/result?rs=${data.prediction}&name=${name}`;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  } finally {
    redirect(redirectPath);
  }
}
