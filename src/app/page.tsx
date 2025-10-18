import Link from 'next/link';
import Header from '@/components/Header';
import { categories } from '@/lib/questions';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="card p-4 mb-4 shadow-lg transition-shadow">
              <h2 className="section-title text-base">All Topics</h2>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/practice/${cat.id}`}
                      className="text-sm text-gray-700 hover:text-primary transition-colors block"
                    >
                      <span className="inline-block mr-2">•</span>
                      <span className="hover:underline">{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-4 shadow-lg transition-shadow">
              <h2 className="section-title text-base">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-primary transition-colors block"
                  >
                    <span className="inline-block mr-2">•</span>
                    <span className="hover:underline">Latest Questions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-primary transition-colors block"
                  >
                    <span className="inline-block mr-2">•</span>
                    <span className="hover:underline">Most Popular</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-primary transition-colors block"
                  >
                    <span className="inline-block mr-2">•</span>
                    <span className="hover:underline">Practice Tests</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Welcome Section */}
            <div className="card p-6 mb-6 shadow-lg transition-shadow">
              <h2 className="section-title">Welcome to Practice Aptitude</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Practice Aptitude is a comprehensive online platform for practicing aptitude,
                logical reasoning, and verbal ability questions. Our carefully curated question bank
                helps students prepare for campus placements, competitive exams, and job interviews.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Each question comes with a detailed explanation to help you understand the concept
                better. Start practicing now and improve your problem-solving skills!
              </p>
            </div>

            {/* Categories Grid */}
            <div className="card p-6 mb-6 shadow-md">
              <h2 className="section-title">Browse Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/practice/${category.id}`}
                    className="border border-gray-300 hover:border-primary transition-all p-4 rounded shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-gray-800 hover:text-primary mb-1">
                          {category.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">{category.description}</p>
                        <span className="text-xs text-primary font-medium">
                          {category.questionCount} Questions →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="card p-6 shadow-lg transition-shadow">
              <h2 className="section-title">Why Choose Practice Aptitude ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    📚 Original Questions
                  </h3>
                  <p className="text-xs text-gray-600">
                    100% unique content with step-by-step solutions
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    💡 Detailed Explanations
                  </h3>
                  <p className="text-xs text-gray-600">
                    Learn concepts with comprehensive explanations
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">📊 Track Progress</h3>
                  <p className="text-xs text-gray-600">Monitor your improvement with analytics</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">🎯 Free Practice</h3>
                  <p className="text-xs text-gray-600">Unlimited access to all questions</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 mt-8 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">About</h3>
              <p className="text-xs text-gray-600">
                Your one-stop solution for aptitude preparation
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Links</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
              <div className="flex space-x-3 text-xs text-gray-600">
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 text-center">
            <p className="text-xs text-gray-600">© 2024 Practice Aptitude. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
