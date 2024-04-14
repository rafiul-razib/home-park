import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
const Explore = () => {
  return (
    <div className="mt-5">
      <div data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          height={200}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={true}
          autoplay={true}
          className="h-32"
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
      </div>

      <div className="max-w-6xl mx-auto">
        <section className="container mx-auto my-8 animate__animated animate__fadeInDown">
          <h1 className="text-3xl font-bold text-center mb-4">
            Welcome to HomPark Luxury Real Estate - Where Exclusivity Meets
            Elegance
          </h1>
          <p className="text-lg text-center">
            Discover a world of refined living with HomPark Luxury Real Estate.
            We specialize in offering exquisite properties in prime locations
            across America. Each of our meticulously curated estates provides
            unparalleled luxury and comfort, promising an unparalleled lifestyle
            experience.
          </p>
        </section>

        <section id="properties" className="container mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            Featured Properties
          </h2>

          <div
            className="property border border-gray-300 rounded-lg p-4 mb-4 "
            data-aos="fade-up-right"
          >
            <h3 className="text-xl font-bold mb-2">Aqua Haven Estates</h3>
            <p className="text-lg mb-2">
              Nestled along the sun-kissed shores of Miami Beach, Aqua Haven
              Estates offers unparalleled oceanfront living. With breathtaking
              views, private beach access, and world-className amenities, this
              is where luxury meets tranquility.
            </p>
            <p className="text-gray-600">Location: Miami, Florida</p>
          </div>

          <div
            className="property border border-gray-300 rounded-lg p-4 mb-4 "
            data-aos="fade-up-left"
          >
            <h3 className="text-xl font-bold mb-2">Vista Ridge Manor</h3>
            <p className="text-lg mb-2">
              Perched high in the Rocky Mountains, Vista Ridge Manor provides an
              exclusive retreat for those seeking alpine elegance. Enjoy skiing,
              hiking, and stunning mountain vistas, all from the comfort of your
              luxurious mountain chalet.
            </p>
            <p className="text-gray-600">Location: Aspen, Colorado</p>
          </div>

          <div
            className="property border border-gray-300 rounded-lg p-4 mb-4"
            data-aos="fade-up-right"
          >
            <h3 className="text-xl font-bold mb-2">Pacific Crest Residences</h3>
            <p className="text-lg mb-2">
              Overlooking the iconic Pacific Coast Highway, Pacific Crest
              Residences epitomizes California coastal living. With private
              infinity pools, gourmet kitchens, and sweeping views of the
              Pacific Ocean, this is the epitome of Malibu luxury.
            </p>
            <p className="text-gray-600">Location: Malibu, California</p>
          </div>

          <div
            className="property border border-gray-300 rounded-lg p-4 mb-4"
            data-aos="fade-up-left"
          >
            <h3 className="text-xl font-bold mb-2">Serenity Pines Retreat</h3>
            <p className="text-lg mb-2">
              Tucked away in the picturesque Blue Ridge Mountains, Serenity
              Pines Retreat offers a peaceful escape from the hustle and bustle
              of city life. Relax in your private cabin, surrounded by lush
              forests and majestic mountain views.
            </p>
            <p className="text-gray-600">Location: Asheville, North Carolina</p>
          </div>

          <div
            className="property border border-gray-300 rounded-lg p-4 mb-4"
            data-aos="fade-up-right"
          >
            <h3 className="text-xl font-bold mb-2">Metropolis Towers</h3>
            <p className="text-lg mb-2">
              Rising above the iconic skyline of Manhattan, Metropolis Towers
              sets the standard for urban luxury living. With sleek modern
              design, unparalleled city views, and a prime location in the heart
              of the city, this is where sophistication meets convenience.
            </p>
            <p className="text-gray-600">Location: New York City, New York</p>
          </div>
        </section>

        <section
          id="contact"
          className="container mx-auto mb-8 animate__animated animate__fadeInUp"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-lg text-center mb-2">
            For inquiries or to schedule a viewing, please contact our sales
            team at:
          </p>
          <ul className="text-lg text-center">
            <li>
              Phone:{" "}
              <a href="tel:1-800-555-1234" className="text-blue-600">
                1-800-555-1234
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:sales@homparkluxury.com"
                className="text-blue-600"
              >
                sales@homparkluxury.com
              </a>
            </li>
            <li>Address: 123 Luxury Avenue, Anytown, USA</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Explore;
