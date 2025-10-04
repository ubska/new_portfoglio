import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message: "Front-End Development Skills",
    quote: `I am proficient in HTML, CSS, JavaScript, and frameworks like Bootstrap, TailwindCSS, and Vue.js. I build responsive and interactive web interfaces with a focus on usability.`,
    name: "Skills & Tools",
    designation: "Frontend",
  },
  {
    message: "Back-End & Frameworks",
    quote: `I work with PHP and Laravel for back-end development, creating efficient web applications. I also handle web scraping, data parsing, and integration with APIs.`,
    name: "Skills & Tools",
    designation: "Backend",
  },
  {
    message: "Continuous Learning & Projects",
    quote: `I am always exploring new technologies and frameworks to expand my web development skills. Current focus areas include Vue.js components, full-stack development, and data handling techniques.`,
    name: "Growth & Learning",
    designation: "Web Development",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Skills & Tools</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
