import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies like React, Vue, and Laravel, ensuring accessibility, scalability, and maintainability.",
  },
  {
    id: 2,
    title: "Frontend Design",
    description:
      "I craft visually appealing and interactive interfaces, focusing on layout, color, and typography to create a seamless user experience across devices.",
  },
  {
    id: 3,
    title: "UX & UI Optimization",
    description:
      "I design intuitive and enjoyable experiences by understanding user behavior, creating wireframes, and implementing prototypes that enhance usability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building modern, responsive web applications, crafting engaging interfaces, and delivering seamless user experiences.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Combining creativity with technical expertise, I provide solutions that are visually appealing, highly functional, and user-friendly.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
