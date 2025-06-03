import Main from "../../../components/Main";
import Section from "../../../components/Section";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Mock data for the course
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
  modules: [
    {
      id: 1,
      title: "Introduction to AI",
      lessons: [
        {
          id: 1,
          title: "What is Artificial Intelligence?",
          duration: "15:30",
          completed: true,
        },
        {
          id: 2,
          title: "History of AI Development",
          duration: "12:45",
          completed: true,
        },
        {
          id: 3,
          title: "Types of AI Systems",
          duration: "18:20",
          completed: false,
        },
        {
          id: 4,
          title: "AI vs Machine Learning",
          duration: "14:15",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Understanding ChatGPT",
      lessons: [
        {
          id: 5,
          title: "Introduction to ChatGPT",
          duration: "20:30",
          completed: false,
        },
        {
          id: 6,
          title: "Prompt Engineering Basics",
          duration: "25:15",
          completed: false,
        },
        {
          id: 7,
          title: "Advanced Prompting Techniques",
          duration: "22:40",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Generative AI Applications",
      lessons: [
        {
          id: 8,
          title: "Text Generation",
          duration: "18:30",
          completed: false,
        },
        {
          id: 9,
          title: "Image Generation with AI",
          duration: "24:15",
          completed: false,
        },
        {
          id: 10,
          title: "Code Generation",
          duration: "19:45",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Practical Projects",
      lessons: [
        {
          id: 11,
          title: "Building a Chatbot",
          duration: "35:20",
          completed: false,
        },
        {
          id: 12,
          title: "AI Content Creation",
          duration: "28:15",
          completed: false,
        },
        { id: 13, title: "Final Project", duration: "45:30", completed: false },
      ],
    },
  ],
};

// Header Component
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              JadiJago
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
            >
              Explore
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in site"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Register
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Video Player Component
const VideoPlayer = ({ currentLesson }) => {
  return (
    <div className="bg-slate-700 rounded-lg overflow-hidden">
      <div className="aspect-video bg-slate-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-300 text-lg">
            {currentLesson
              ? currentLesson.title
              : "Select a lesson to start learning"}
          </p>
          {currentLesson && (
            <p className="text-gray-400 text-sm mt-2">
              Duration: {currentLesson.duration}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Course Info Component
const CourseInfo = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h1 className="text-2xl font-bold text-white mb-2">{courseData.title}</h1>
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-green-400 text-sm font-medium">
          {courseData.rating}
        </span>
        <span className="text-gray-400 text-sm">{courseData.students}</span>
        <span className="text-gray-400 text-sm">{courseData.duration}</span>
      </div>

      <p className="text-gray-300 mb-6">{courseData.description}</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          What you'll learn:
        </h3>
        <ul className="space-y-2">
          {courseData.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-3"
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
  );
};

// Playlist Component
const Playlist = ({ onLessonSelect, currentLessonId }) => {
  const [expandedModules, setExpandedModules] = useState([1]);

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Course Content</h2>
      <div className="space-y-4">
        {courseData.modules.map((module) => (
          <div key={module.id} className="border border-slate-700 rounded-lg">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700 rounded-lg"
            >
              <span className="text-white font-medium">{module.title}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${
                  expandedModules.includes(module.id) ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {expandedModules.includes(module.id) && (
              <div className="px-4 pb-4">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onLessonSelect(lesson)}
                    className={`w-full flex items-center justify-between p-3 text-left rounded-md mb-2 transition-colors ${
                      currentLessonId === lesson.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-slate-700 text-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                          lesson.completed
                            ? "bg-green-500 border-green-500"
                            : "border-gray-400"
                        }`}
                      >
                        {lesson.completed && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{lesson.title}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {lesson.duration}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Purchase Card Component
const PurchaseCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg sticky top-6">
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-red-600 mb-4">
          {courseData.price}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md mb-3 transition-colors">
          Add to Cart
        </button>
        <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors">
          Buy Now
        </button>
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
  );
};

export default function Learn() {
  const [currentLesson, setCurrentLesson] = useState(null);

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <Main>
      <Section>
        {/* <Header /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <VideoPlayer currentLesson={currentLesson} />
              <CourseInfo />
            </div>

            {/* Right Section - Playlist and Purchase Card */}
            <div className="space-y-6">
              <Playlist
                onLessonSelect={handleLessonSelect}
                currentLessonId={currentLesson?.id}
              />
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
}
