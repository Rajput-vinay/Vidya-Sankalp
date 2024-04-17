import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CTAButton from "../components/core/HomePage/CTAButton";
import HighLightText from "../components/core/HomePage/HighLightText";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
 import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]  transition-all duration-200 hover:scale-95 w-fit hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold">
          Transform Your Future with
          {/* Empower Your Future with  */}
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          Enrich your skill set through our flexible online coding courses,
          allowing you to learn conveniently from any corner of the globe.
          Unlock a treasure trove of educational materials, including hands-on
          projects, quizzes, and personalized guidance from our expert
          instructors.
        </div>

        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} Liknto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} Liknto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)] h-[40%]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section one */}
        <div >
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Spark your
                <HighLightText text={"coding prowess "} />
                with our online courses
              </div>
            }
            subHeading={
              "Our courses are thoughtfully curated and guided by coding experts, professionals with extensive industry experience, devoted to sharing their profound knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "learn more", link: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage: Vinay Rajput</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n  </body>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighLightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "Take the plunge and experience it for yourself. Our interactive learning environment guarantees you'll be actively coding from the very start of your lessons."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              Liknto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              Liknto: "/signup",
              active: false,
            }}
            codeColor={"text-pink-200"}
            codeblock={`import React from "react";\n import CTAButton from "./CTAButton";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Jai Shree Ram</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute "></div>}
          />
        </div>
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} Liknto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} Liknto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>

        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighLightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern VidyaSankalp is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} Liknto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimeLineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>




      {/* Section 3 */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
       
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
