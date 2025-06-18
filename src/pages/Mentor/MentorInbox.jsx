import { useState } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import {
  Search,
  Mail,
  MailOpen,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  Send,
  Plus,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    student: "Alex Chen",
    studentAvatar: "AC",
    subject: "Question about React Hooks assignment",
    lastMessage: "I'm having trouble understanding useEffect dependencies...",
    time: "2 hours ago",
    unread: true,
    starred: false,
    course: "React Advanced Patterns",
    priority: "normal",
    messageCount: 3,
  },
  {
    id: 2,
    student: "Maria Garcia",
    studentAvatar: "MG",
    subject: "Request for assignment extension",
    lastMessage: "Due to personal circumstances, I would like to request...",
    time: "4 hours ago",
    unread: true,
    starred: true,
    course: "TypeScript Fundamentals",
    priority: "high",
    messageCount: 1,
  },
  {
    id: 3,
    student: "John Smith",
    studentAvatar: "JS",
    subject: "Thank you for the feedback!",
    lastMessage: "Your feedback on my project was very helpful...",
    time: "1 day ago",
    unread: false,
    starred: false,
    course: "Node.js Backend",
    priority: "normal",
    messageCount: 5,
  },
  {
    id: 4,
    student: "Sarah Wilson",
    studentAvatar: "SW",
    subject: "Clarification on final project requirements",
    lastMessage: "Could you please clarify the requirements for...",
    time: "2 days ago",
    unread: false,
    starred: true,
    course: "JavaScript ES6+",
    priority: "normal",
    messageCount: 2,
  },
];

const templates = [
  {
    id: 1,
    name: "Assignment Feedback",
    subject: "Feedback on your assignment",
    content:
      "Hi {student_name},\n\nI've reviewed your assignment and here's my feedback:\n\n{feedback_content}\n\nKeep up the great work!\n\nBest regards,\n{mentor_name}",
  },
  {
    id: 2,
    name: "Extension Approval",
    subject: "Assignment extension approved",
    content:
      "Hi {student_name},\n\nYour request for an assignment extension has been approved. Your new deadline is {new_deadline}.\n\nBest regards,\n{mentor_name}",
  },
  {
    id: 3,
    name: "Course Welcome",
    subject: "Welcome to {course_name}!",
    content:
      "Hi {student_name},\n\nWelcome to {course_name}! I'm excited to have you in the course.\n\nFeel free to reach out if you have any questions.\n\nBest regards,\n{mentor_name}",
  },
];

export default function MentorInbox() {
  const [selectedConversations, setSelectedConversations] = useState([]);
  const [activeTab, setActiveTab] = useState("inbox");
  const [showCompose, setShowCompose] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  const toggleConversationSelection = (conversationId) => {
    setSelectedConversations((prev) =>
      prev.includes(conversationId)
        ? prev.filter((id) => id !== conversationId)
        : [...prev, conversationId]
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
                Manage Inbox
              </h1>
              <p className="text-gray-600">
                Communicate with your students and manage conversations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Templates
              </button>
              <button
                onClick={() => setShowCompose(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Compose
              </button>
            </div>
          </div>

          {/* Templates Panel */}
          {showTemplates && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Message Templates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">
                      {template.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {template.subject}
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab("inbox")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "inbox"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Inbox ({conversations.filter((c) => c.unread).length})
                </button>
                <button
                  onClick={() => setActiveTab("starred")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "starred"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Starred
                </button>
                <button
                  onClick={() => setActiveTab("sent")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "sent"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Sent
                </button>
              </nav>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Courses</option>
              <option value="react">React Advanced Patterns</option>
              <option value="typescript">TypeScript Fundamentals</option>
              <option value="nodejs">Node.js Backend</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Priority</option>
              <option value="high">High Priority</option>
              <option value="normal">Normal Priority</option>
            </select>
          </div>

          {/* Bulk Actions */}
          {selectedConversations.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-800">
                  {selectedConversations.length} conversation
                  {selectedConversations.length > 1 ? "s" : ""} selected
                </span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <Archive className="w-4 h-4" />
                    Archive
                  </button>
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Star
                  </button>
                  <button className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-medium">
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Conversations List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="divide-y divide-gray-200">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                    conversation.unread ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedConversations.includes(conversation.id)}
                      onChange={() =>
                        toggleConversationSelection(conversation.id)
                      }
                    />

                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-700">
                        {conversation.studentAvatar}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h3
                            className={`font-medium ${
                              conversation.unread
                                ? "font-semibold text-gray-900"
                                : "text-gray-900"
                            }`}
                          >
                            {conversation.student}
                          </h3>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {conversation.course}
                          </span>
                          {conversation.priority === "high" && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                              High Priority
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {conversation.starred && (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          )}
                          {conversation.unread ? (
                            <Mail className="h-4 w-4 text-blue-500" />
                          ) : (
                            <MailOpen className="h-4 w-4 text-gray-400" />
                          )}
                          <span className="text-sm text-gray-500">
                            {conversation.time}
                          </span>
                        </div>
                      </div>

                      <h4
                        className={`text-sm mb-2 ${
                          conversation.unread ? "font-medium" : ""
                        }`}
                      >
                        {conversation.subject}
                      </h4>

                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {conversation.lastMessage}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {conversation.messageCount} messages
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Reply className="h-4 w-4" />
                            Reply
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                            <Forward className="h-4 w-4" />
                            Forward
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compose Modal */}
          {showCompose && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Compose Message
                    </h3>
                    <button
                      onClick={() => setShowCompose(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="Select students..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Enter subject..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={8}
                      placeholder="Type your message..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setShowCompose(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
