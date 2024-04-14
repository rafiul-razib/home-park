import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import penthouse1 from "../assets/images/penthouse (1).jpg";
import penthouse2 from "../assets/images/penthouse (2).jpg";
import penthouse3 from "../assets/images/penthouse (3).jpg";
import beach1 from "../assets/images/beach (1).jpg";
import beach2 from "../assets/images/beach (2).jpg";
import beach3 from "../assets/images/beach (3).jpg";
import beach4 from "../assets/images/beach (4).jpg";
import resort1 from "../assets/images/resort (1).jpg";
import resort2 from "../assets/images/resort (2).jpg";
import resort3 from "../assets/images/resort (3).jpg";
import resort4 from "../assets/images/resort (4).jpg";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      height={200}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={true}
      autoplay={true}
      className="max-h-[550px] w-full"
    >
      <SwiperSlide>
        <img src={penthouse1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={penthouse2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={penthouse3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={beach1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={beach2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={beach3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={beach4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={resort1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={resort2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={resort3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={resort4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
