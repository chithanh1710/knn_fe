import { submitForm } from "@/services/actions";
import ButtonSubmit from "./ButtonSubmit";

export default function page() {
  return (
    <form
      action={submitForm}
      method="POST"
      className="max-w-md mx-auto p-6  rounded-lg shadow-md space-y-4 my-16"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-#26A687">
        Dự đoán Bệnh Tiểu Đường
      </h2>
      <div>
        <label className="block text-gray-700 font-medium">Họ tên</label>
        <input
          type="text"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <div className="flex gap-4">
        <div>
          <label className="block text-gray-700 font-medium">Tuổi</label>
          <input
            type="number"
            name="Age"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">BMI</label>
          <input
            type="number"
            name="BMI"
            step="0.1"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min={0}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">
          Số lần mang thai
        </label>
        <input
          type="number"
          name="Pregnancies"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          min={0}
        />
      </div>

      <div className="flex gap-4">
        <div>
          <label className="block text-gray-700 font-medium">
            Lượng Insulin
          </label>
          <input
            type="number"
            name="Insulin"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min={0}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            Lượng Glucose
          </label>
          <input
            type="number"
            name="Glucose"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min={0}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Huyết áp</label>
        <input
          type="number"
          name="BloodPressure"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          min={0}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Độ dày da</label>
        <input
          type="number"
          name="SkinThickness"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          min={0}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">
          Chỉ số Di truyền Bệnh Tiểu Đường
        </label>
        <input
          type="number"
          name="DiabetesPedigreeFunction"
          step="0.01"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          min={0}
        />
      </div>

      <ButtonSubmit />
    </form>
  );
}
