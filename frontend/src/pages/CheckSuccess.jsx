import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center">
      <div className="bg-white p-6 md:mx-auto rounded-md shadow">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12 0A12 12 0 1 0 24 12 12 12 0 0 0 12 0Zm6.927 8.2-6.845 9.289a1 1 0 0 1-1.451.076l-3.261-3.227a1 1 0 0 1 1.376-1.451l2.538 2.51 6.227-8.451A1 1 0 1 1 18.927 8.2Z"
          />
        </svg>

        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
            Thanh toán thành công!
          </h3>

          <p className="text-gray-600 my-2">
            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
          </p>

          <p>Chúc bạn 1 ngày tốt lành!</p>

          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 bg-buttonBgColor text-white font-semibold py-3 rounded-md"
            >
              Quay về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
