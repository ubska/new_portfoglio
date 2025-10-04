import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/Screenshot 2025-09-26 214412.png";
import card2 from "../../assets/images/portfolio-images/Screenshot 2025-10-04 173805.png";
// import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
 {
  id: 1,
  image: card1,
  category: "WordPress Website",
  title: "ItaliaUkraine – The Bridge Between Cultures",
  description:
    "A bilingual WordPress website that explores cultural connections between Italy and Ukraine. Designed to showcase stories, travel guides, and events, it serves as a bridge between the two nations. Features include multilingual content, interactive maps, and integrated weather updates from the companion web app.",
  link: "https://leodvp.com/ItaliaUkraine/",
},
{
  id: 2,
  image: card2,
  category: "Web Application",
  title: "Weather Web App",
  description:
    "A real-time weather web application built with HTML, CSS, and JavaScript. It retrieves live weather data from the OpenWeather API, displaying temperature, humidity, and current conditions for any city. Users can easily search for cities in Italy or Ukraine to check local weather conditions.",
  link: "https://weather-web-a.netlify.app/",
},

  // {
  //   id: 3,
  //   image: card3,
  //   category: "Telegram Bot",
  //   title: "Telegram Bot - Recipes",
  //   description:
  //     "Recipes for hungry developers. Telegram bot developed using PHP with ngrok. Users send the name of a dish via chat, and the bot searches a static recipe book. It replies with ingredients and preparation steps if found, or a polite message if unavailable.",
  //   link: "#!",
  // },
  // {
  //   id: 4,
  //   image: card4,
  //   category: "Web Application",
  //   title: "Weather Web App",
  //   description:
  //     "Weather forecast web application. Developed using HTML, CSS, and JavaScript, this app allows users to view the weather forecast of any city using the OpenWeather API. The app retrieves real-time data such as temperature, humidity, and other related information.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "UI/UX Design",
  //   title: "Portfolio Website",
  //   description:
  //     "Designed and developed a personal portfolio website to showcase projects and skills.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "Frontend Development",
  //   title: "Landing Page Design",
  //   description:
  //     "Enhanced user experience with a clean, responsive landing page optimized for conversions.",
  //   link: "#!",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing applications.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

