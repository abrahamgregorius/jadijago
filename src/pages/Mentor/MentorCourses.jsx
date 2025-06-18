import { useState } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Users,
  MoreHorizontal,
  Filter,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "React Advanced Patterns",
    description:
      "Master advanced React concepts including hooks, context, and performance optimization",
    status: "Published",
    students: 234,
    duration: "8 hours",
    lessons: 24,
    rating: 4.8,
    reviews: 89,
    lastUpdated: "2 days ago",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 2,
    title: "TypeScript Fundamentals",
    description:
      "Learn TypeScript from basics to advanced concepts with practical examples",
    status: "Published",
    students: 156,
    duration: "6 hours",
    lessons: 18,
    rating: 4.7,
    reviews: 67,
    lastUpdated: "1 week ago",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    description:
      "Build scalable backend applications with Node.js, Express, and MongoDB",
    status: "Draft",
    students: 0,
    duration: "12 hours",
    lessons: 32,
    rating: 0,
    reviews: 0,
    lastUpdated: "3 days ago",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 4,
    title: "JavaScript ES6+",
    description:
      "Modern JavaScript features and best practices for web development",
    status: "Published",
    students: 421,
    duration: "4 hours",
    lessons: 16,
    rating: 4.6,
    reviews: 156,
    lastUpdated: "1 month ago",
    image: "/placeholder.svg?height=120&width=200",
  },
];

export default function MentorCourses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showActions, setShowActions] = useState(null);

  const toggleCourseSelection = (courseId) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <DashboardSidebar></DashboardSidebar>
      <div className="sm:ml-64 mt-14 p-4 text-black">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Manage Courses
              </h1>
              <p className="text-gray-600">
                Create, edit, and manage your course content
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              Create Course
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>

          {/* Bulk Actions */}
          {selectedCourses.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-800">
                  {selectedCourses.length} course
                  {selectedCourses.length > 1 ? "s" : ""} selected
                </span>
                <div className="flex items-center gap-2">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Publish
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Archive
                  </button>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Courses Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCourses(courses.map((c) => c.id));
                          } else {
                            setSelectedCourses([]);
                          }
                        }}
                      />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Course
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Students
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Rating
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Last Updated
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={selectedCourses.includes(course.id)}
                          onChange={() => toggleCourseSelection(course.id)}
                        />
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-600 max-w-md truncate">
                              {course.description}
                            </p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <span>{course.lessons} lessons</span>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            course.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : course.status === "Draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-sm text-gray-900">
                          <Users className="w-4 h-4 text-gray-400" />
                          {course.students}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {course.rating > 0 ? (
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium text-gray-900">
                              {course.rating}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({course.reviews})
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">
                            No ratings
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-600">
                          {course.lastUpdated}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowActions(
                                showActions === course.id ? null : course.id
                              )
                            }
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                          </button>

                          {showActions === course.id && (
                            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <div className="py-1">
                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                  <Eye className="w-4 h-4" />
                                  View Course
                                </button>
                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                  <Edit className="w-4 h-4" />
                                  Edit Course
                                </button>
                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                  <Users className="w-4 h-4" />
                                  View Students
                                </button>
                                <hr className="my-1" />
                                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                  <Trash2 className="w-4 h-4" />
                                  Delete Course
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-gray-600">
              Showing 1-4 of 4 courses
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
