import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

const courseData = {
  title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
  rating: "8/10 Rating",
  price: "Rp102,000",
  instructor: "AI Expert",
  duration: "12 hours",
  students: "2,847 students",
  description:
    "Master the fundamentals of Artificial Intelligence, ChatGPT, and Generative AI technologies. This comprehensive course covers everything from basic concepts to advanced applications, perfect for beginners and professionals looking to enhance their AI skills.",
  features: [
    "12 hours of on-demand video",
    "45 downloadable resources",
    "Full lifetime access",
    "Access on mobile and TV",
    "Certificate of completion",
  ],
};

export default function CoursesDetail() {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const courseId = useParams().id;

  const addToCart = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user) {
      alert('Please log in to add to cart');
      return;
    }

    const { error } = await supabase.from('cart').insert({
      user_id: user.id,
      course_id: courseId,
    });

    if (error) {
      console.error('Failed to add to cart:', error);
      alert('Error adding to cart');
    } else {
      alert('Added to cart!');
      navigate('/cart');
    }
  }


  useEffect(() => {
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select()
        .eq("id", courseId)
        .single();
      if (error) console.error("Error fetching course:", error);
      else setCourse(data);
      setLoading(false);
    };

    fetchCourse();
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Header */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
            <div className="flex items-center gap-2 text-green-400 font-semibold mb-6">
              {course.rating}
            </div>

            {/* Course Image */}
            <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center text-slate-400 text-xl font-semibold mb-8">
              <img src={course.thumbnail} alt={course.title} className="object-cover w-full h-full rounded-lg" />
            </div>

            {/* Course Content */}
            <h3 className="text-xl font-semibold mb-4">Course Material</h3>
            <div className="space-y-4">
              <div className="bg-slate-800 p-5 rounded-lg shadow">
                <p className="font-semibold mb-2">Description</p>
                <p className="text-slate-300 text-sm">{course.description}</p>
              </div>
            </div>
          </div>

          {/* Right Section - Pricing */}
          <div className="">
            <div className="bg-white rounded-lg p-6 shadow-lg sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-red-600 mb-4">
                  {course.price}
                </div>
                <button onClick={addToCart} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md mb-3 transition-colors">
                  Add to Cart
                </button>
                <Link to="/my-courses">
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  This course includes:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {courseData.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-6 border-t border-slate-700">
        © 2025 JadiJago. All rights reserved.
      </footer>
    </div>
  );
}
