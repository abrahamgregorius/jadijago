import { Link } from "react-router-dom";
import dummyImg from "../../assets/dummy-img.png";
import Main from "../../components/Main";
import Section from "../../components/Section";
import Courses from "../../components/WelcomePage/Courses";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from('courses').select('*');
      if (error) console.error('Error fetching courses:', error);
      else setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Main>
        <Section>
          <div className="popular flex flex-col">
            <div className="popular-head">
              <h3 className="text-4xl font-semibold">Popular Courses</h3>
            </div>
            <div className="popular-body">
              <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {courses
                  .map((course, index) => (
                    <Link
                      to={`/courses/${course.id}`}
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
                            {course.title}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {course.rating}
                        </p>
                        <p className="text-base font-bold text-green-600">
                          {course.price}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="all flex flex-col">
            <div className="all-head">
              <h3 className="text-4xl font-semibold">All Courses</h3>
            </div>
            <div className="all-body">
              <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {courses
                  .map((course, index) => (
                    <Link
                      to={`/courses/${course.id}`}
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
                          {course.title}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {course.rating}
                        </p>
                        <p className="text-base font-bold text-green-600">
                          {course.price}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
}
