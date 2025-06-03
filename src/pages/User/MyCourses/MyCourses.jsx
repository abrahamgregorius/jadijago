import { Link } from "react-router-dom";
import Main from "../../../components/Main";
import Section from "../../../components/Section";
import dummyImg from "../../../assets/dummy-img.png";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from("purchases")
        .select(
          `
          course:course_id (
            id,
            title,
            rating,
            price,
            instructor
          )
        `
        )
        .eq("user_id", userId);
      if (error) {
        console.error("Error fetching purchased courses:", error);
        return;
      }

      // Extract the course data out of the nested response
      const courses = data.map((purchase) => purchase.course);
      setCourses(courses);
    };

    fetchCourses();
  }, [userId]);

  return (
    <Main>
      <Section>
        <div className="popular flex flex-col">
          <div className="popular-head">
            <h3 className="text-4xl font-semibold">Active Courses</h3>
          </div>
          <div className="popular-body">
            <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {courses.map((course) => (
                <Link
                  to={`/courses/learn/${course.id}`}
                  key={course.id}
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
                    <p className="text-sm font-medium text-gray-700">{course.rating}/10</p>
                    <p className="text-base font-bold text-green-600">
                      Rp{course.price.toLocaleString()}
                    </p>
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
