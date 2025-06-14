import { Link } from "react-router-dom";
import dummyImg from "../../assets/dummy-img.png";
import { useEffect, useState } from "react";
import Section from "../Section";

import { supabase } from "../../lib/supabaseClient";

export default function Courses() {
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
    <Section>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <h2 className="text-4xl font-semibold">
          Course Untukmu
        </h2>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {courses
          .map((course, index) => (
            <Link to={`/courses/${course.id}`} key={index}>
              <div
                className="shadow shadow-white bg-white rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={course.thumbnail}
                  alt="course"
                  className="object-cover w-full h-48"
                />

                <div className="px-4 pt-4 flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/40?img=${index + 3}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    {course.instructor}
                  </p>
                </div>

                <div className="p-4 flex flex-col gap-y-2 text-black">
                  <p className="text-base font-bold line-clamp-2">
                    {course.title}
                  </p>
                  <p className="text-sm font-medium text-gray-700">{course.rating}</p>
                  <p className="text-base font-bold text-green-600">
                    {course.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Section>
  );
}
