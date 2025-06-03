import { Link } from "react-router-dom";
import Main from "../../../components/Main";
import Section from "../../../components/Section";
import dummyImg from "../../../assets/dummy-img.png";


export default function MyCourses() {
  return (
    <Main>
      <Section>
        <div className="popular flex flex-col">
          <div className="popular-head">
            <h3 className="text-4xl font-semibold">Active Courses</h3>
          </div>
          <div className="popular-body">
            <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Link
                    to={`/courses/learn/${index}`}
                    key={index}
                    className="shadow select-none cursor-pointer shadow-white hover:bg-gray-200 transition duration-250 bg-white rounded-xl overflow-hidden flex flex-col"
                  >
                    <img
                      src={dummyImg}
                      alt="course"
                      className="object-cover w-full h-48"
                    />
                    <div className="p-4 flex flex-col gap-y-2 text-black">
                      <p className="text-base font-bold">
                        The Complete AI Guide: Learn ChatGPT, Generative AI &
                        More
                      </p>
                      <p className="text-sm font-medium text-gray-700">8/10</p>
                      <p className="text-base font-bold text-green-600">
                        Rp102,000
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="popular flex flex-col">
          <div className="popular-head">
            <h3 className="text-4xl font-semibold">Archived Courses</h3>
          </div>
          <div className="popular-body">
            <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Link
                    to={`/courses/${index}`}
                    key={index}
                    className="shadow select-none cursor-pointer shadow-white hover:bg-gray-200 transition duration-250 bg-slate-200 rounded-xl overflow-hidden flex flex-col"
                  >
                    <img
                      src={dummyImg}
                      alt="course"
                      className="object-cover w-full h-48"
                    />
                    <div className="p-4 flex flex-col gap-y-2 text-black">
                      <p className="text-base font-bold">
                        The Complete AI Guide: Learn ChatGPT, Generative AI &
                        More
                      </p>
                      <p className="text-sm font-medium text-gray-700">8/10</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
}
