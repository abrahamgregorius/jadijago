import { useState } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import {
  Search,
  MessageSquare,
  ThumbsUp,
  Eye,
  Clock,
  Plus,
  Pin,
  Flag,
  Trash2,
  Edit,
  MoreHorizontal,
} from "lucide-react";

const forumPosts = [
  {
    id: 1,
    title: "Best practices for React state management in 2024?",
    author: "Alex Chen",
    authorAvatar: "AC",
    category: "React Advanced Patterns",
    content:
      "I've been working with React for a while now, but I'm still confused about when to use different state management solutions...",
    replies: 23,
    views: 156,
    likes: 12,
    timeAgo: "2 hours ago",
    isPinned: true,
    isApproved: true,
    needsModeration: false,
    tags: ["react", "state-management", "redux"],
    lastActivity: "1 hour ago",
  },
  {
    id: 2,
    title: "How to optimize TypeScript compilation speed?",
    author: "Sarah Johnson",
    authorAvatar: "SJ",
    category: "TypeScript Fundamentals",
    content:
      "My TypeScript project is taking forever to compile. Are there any specific configurations or techniques...",
    replies: 8,
    views: 89,
    likes: 5,
    timeAgo: "4 hours ago",
    isPinned: false,
    isApproved: true,
    needsModeration: false,
    tags: ["typescript", "performance", "compilation"],
    lastActivity: "2 hours ago",
  },
  {
    id: 3,
    title: "Inappropriate content - needs review",
    author: "Anonymous User",
    authorAvatar: "AU",
    category: "General Discussion",
    content:
      "This post contains content that may violate community guidelines...",
    replies: 2,
    views: 34,
    likes: 0,
    timeAgo: "6 hours ago",
    isPinned: false,
    isApproved: false,
    needsModeration: true,
    tags: ["general"],
    lastActivity: "5 hours ago",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox - When to use what?",
    author: "Emma Wilson",
    authorAvatar: "EW",
    category: "Web Development Basics",
    content:
      "I'm still learning CSS and I'm confused about when I should use CSS Grid versus Flexbox...",
    replies: 15,
    views: 123,
    likes: 9,
    timeAgo: "1 day ago",
    isPinned: false,
    isApproved: true,
    needsModeration: false,
    tags: ["css", "grid", "flexbox", "layout"],
    lastActivity: "8 hours ago",
  },
];

const categories = [
  { name: "React Advanced Patterns", count: 45, moderationNeeded: 2 },
  { name: "TypeScript Fundamentals", count: 32, moderationNeeded: 0 },
  { name: "Node.js Backend", count: 28, moderationNeeded: 1 },
  { name: "Web Development Basics", count: 67, moderationNeeded: 3 },
  { name: "General Discussion", count: 23, moderationNeeded: 5 },
];

export default function MentorForum() {
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [showActions, setShowActions] = useState(null);

  const togglePostSelection = (postId) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const filteredPosts = forumPosts.filter((post) => {
    if (activeTab === "moderation") return post.needsModeration;
    if (activeTab === "pinned") return post.isPinned;
    return true;
  });
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
                Manage Forums
              </h1>
              <p className="text-gray-600">
                Moderate discussions and manage community interactions
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              Create Announcement
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Tabs */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "all"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    All Posts ({forumPosts.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("moderation")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "moderation"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Needs Moderation (
                    {forumPosts.filter((p) => p.needsModeration).length})
                  </button>
                  <button
                    onClick={() => setActiveTab("pinned")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "pinned"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Pinned ({forumPosts.filter((p) => p.isPinned).length})
                  </button>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedPosts.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">
                      {selectedPosts.length} post
                      {selectedPosts.length > 1 ? "s" : ""} selected
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                        <Pin className="w-4 h-4" />
                        Pin
                      </button>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                        <Eye className="w-4 h-4" />
                        Approve
                      </button>
                      <button className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Forum Posts */}
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`bg-white border rounded-lg p-6 ${
                      post.needsModeration
                        ? "border-red-200 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedPosts.includes(post.id)}
                        onChange={() => togglePostSelection(post.id)}
                      />

                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-gray-700">
                          {post.authorAvatar}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {post.isPinned && (
                              <Pin className="h-4 w-4 text-orange-500" />
                            )}
                            {post.needsModeration && (
                              <Flag className="h-4 w-4 text-red-500" />
                            )}
                            <h3 className="font-semibold text-lg text-gray-900">
                              {post.title}
                            </h3>
                          </div>

                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowActions(
                                  showActions === post.id ? null : post.id
                                )
                              }
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <MoreHorizontal className="w-4 h-4 text-gray-400" />
                            </button>

                            {showActions === post.id && (
                              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                <div className="py-1">
                                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    <Eye className="w-4 h-4" />
                                    View Full Post
                                  </button>
                                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    <Edit className="w-4 h-4" />
                                    Edit Post
                                  </button>
                                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    <Pin className="w-4 h-4" />
                                    {post.isPinned ? "Unpin" : "Pin"} Post
                                  </button>
                                  <hr className="my-1" />
                                  <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                    <Trash2 className="w-4 h-4" />
                                    Delete Post
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>
                            by{" "}
                            <span className="font-medium">{post.author}</span>
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.timeAgo}
                          </div>
                          {post.needsModeration && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                              Needs Review
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                          {post.content}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {post.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {post.views} views
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              {post.likes} likes
                            </div>
                            <span className="text-xs">
                              Last activity: {post.lastActivity}
                            </span>
                          </div>

                          {post.needsModeration && (
                            <div className="flex items-center gap-2">
                              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                                Approve
                              </button>
                              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Moderation Queue */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Moderation Queue
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-red-900">
                        Posts pending review
                      </p>
                      <p className="text-xs text-red-700">
                        Requires immediate attention
                      </p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      {forumPosts.filter((p) => p.needsModeration).length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-yellow-900">
                        Reported posts
                      </p>
                      <p className="text-xs text-yellow-700">
                        Community reports
                      </p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                      3
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {category.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {category.count} posts
                        </p>
                      </div>
                      {category.moderationNeeded > 0 && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                          {category.moderationNeeded} pending
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                    Create Announcement
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                    Manage Categories
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                    View Reports
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                    Forum Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
