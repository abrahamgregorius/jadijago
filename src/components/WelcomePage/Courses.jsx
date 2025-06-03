import dummyImg from "../../assets/dummy-img.png";
import Section from "../Section";

export default function Courses() {
  return (
    <Section>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Course Untukmu
        </h2>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="shadow shadow-white bg-white rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={dummyImg}
                alt="course"
                className="object-cover w-full h-48"
              />

              <div className="px-4 pt-4 flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-semibold text-gray-800">John Doe</p>
              </div>

              <div className="p-4 flex flex-col gap-y-2 text-black">
                <p className="text-base font-bold">
                  The Complete AI Guide: Learn ChatGPT, Generative AI & More
                </p>
                <p className="text-sm font-medium text-gray-700">8/10</p>
                <p className="text-base font-bold text-green-600">Rp102,000</p>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
