import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md ">
        <h2 className="heading text-center">Liên hệ với chúng tôi</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Gặp sự cố kỹ thuật? Muốn gửi phản hồi? Hãy cho chúng tôi biết.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Email của bạn
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="Subject"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Vấn đề bạn gặp phải
            </label>
            <input
              type="text"
              id="Subject"
              placeholder="Cho chúng tôi biết chúng tôi có thể giúp bạn như thế nào"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Lời nhắn của bạn
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit ">
            Gửi phản hồi
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
