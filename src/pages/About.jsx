import { profile } from "../assets";
import Story from "../components/Story";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl gap-8 px-4 md:px-8 py-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="border-t-4 border-white w-32 mb-8"
          ></div>
          <h1 className="text-6xl font-bold  mb-4">
            Nice to meet you,<br />I’m Vanreuth
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base md:text-lg mt-2 max-w-xl "
          >
            I responsibilities encompass designing and implementing website features, ensuring functionality, responsiveness, and a positive user experience. Collaboration with cross-functional teams, adherence to best coding practices, regular testing for performance and security, troubleshooting, debugging, and staying abreast of industry trends are integral to enhancing and maintaining the quality of web projects and completed<br />
            <span className="font-semibold ">4 Websites, 1 Systems.</span>
          </p>
          <div className="flex gap-16 mt-16">
            <div>
              <span className="text-5xl font-bold ">1</span>
              <div className="text-lg font-semibold  mt-2">YEARS OF<br />EXPERIENCE</div>
            </div>
            <div>
              <span className="text-5xl font-bold ">4</span>
              <div className="text-lg font-semibold  mt-2">SUCCESSFUL<br />PROJECTS</div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden flex items-center justify-center bg-white"
          >
            <img
              src={profile}
              alt="Heng's Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      
    </div>

    <Story />

    </>

  );
};

export default About;
