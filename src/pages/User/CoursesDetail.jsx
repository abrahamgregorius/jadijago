
export default function CoursesDetail() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">JadiJago</h1>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Explore</a>
          <input
            type="text"
            placeholder="Search in site"
            className="bg-slate-800 border border-slate-600 rounded px-3 py-1 text-sm text-white placeholder:text-slate-400"
          />
          <a href="#" className="hover:text-blue-400">Register</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded transition">
            Log In
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">
              The Complete AI Guide: Learn ChatGPT, Generative AI & More
            </h2>
            <div className="flex items-center gap-2 text-green-400 font-semibold mb-6">
              8/10 Rating
            </div>

            {/* Course Image */}
            <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center text-slate-400 text-xl font-semibold mb-8">
              Course Thumbnail
            </div>

            {/* Course Content */}
            <h3 className="text-xl font-semibold mb-4">Course Material</h3>
            <div className="space-y-4">
              <div className="bg-slate-800 p-5 rounded-lg shadow">
                <p className="font-semibold mb-2">Material 1</p>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  <li>1.1 Sub-material</li>
                  <li>1.2 Sub-material</li>
                  <li>1.3 Sub-material</li>
                  <li>1.4 Sub-material</li>
                  <li>1.5 Sub-material</li>
                  <li>1.6 Material review</li>
                  <li>1.7 Mandatory project / Exam</li>
                </ul>
              </div>

              {[2, 3, 4].map((num) => (
                <div key={num} className="bg-slate-800 p-5 rounded-lg shadow">
                  <p className="font-semibold">Material {num}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Pricing */}
          <aside className="bg-white text-slate-900 rounded-lg shadow-md p-6 w-full max-h-[25vh] lg:w-1/3">
            <p className="text-center text-4xl font-bold mb-4 text-red-600">Rp102,000</p>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-3 transition">
              Add to Cart
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded transition">
              Buy Now
            </button>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-6 border-t border-slate-700">
        © 2025 JadiJago. All rights reserved.
      </footer>
    </div>
  );
}
