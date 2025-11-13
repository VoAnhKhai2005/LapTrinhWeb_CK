import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Thông tin về
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Saleh Mahmud
          </span>
        </h3>
        <p className="text__para">
          Bác sĩ chuyên khoa cấp II, hơn 10 năm kinh nghiệm trong lĩnh vực thần
          kinh học.Tư vấn và điều trị chuyên sâu về các rối loạn vận động, bệnh
          lý thoái hóa thần kinh (Parkinson, Alzheimer) và đau đầu mãn tính.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Học vấn
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("10-04-2009")} - {formateDate("10-05-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Thạc sĩ thần kinh học
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("11-04-2013")} - {formateDate("10-06-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Thạc sĩ thần kinh học
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Kinh nghiệm
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("11-04-2013")} - {formateDate("10-06-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Khoa thần kinh
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("11-04-2013")} - {formateDate("10-06-2015")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Khoa thần kinh
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
