import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ======== About img ======== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[670px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======== About content ======== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h3 className="heading">Về Chúng Tôi</h3>
            <p className="text__para mt-[30px]">
              Cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao, kết hợp
              công nghệ hiện đại và đội ngũ y bác sĩ tận tâm. Mục tiêu của chúng
              tôi là giúp mỗi bệnh nhân có trải nghiệm tốt nhất, an toàn và chu
              đáo trong suốt quá trình điều trị.
            </p>
            <Link to="/">
              <button className="btn">Tìm hiểu thêm</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
