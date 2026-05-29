'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MentorBridge</h1>
          <div className="flex gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Connect with Expert Mentors
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get personalized guidance from experienced professionals. Learn, grow, and achieve your goals with MentorBridge.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup" className="btn btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
          <Link href="#features" className="btn btn-outline text-lg px-8 py-3">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose MentorBridge?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">Expert Mentors</h4>
              <p className="text-gray-600">Connect with industry experts and experienced professionals in your field.</p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="text-xl font-bold mb-2">Flexible Schedule</h4>
              <p className="text-gray-600">Learn at your own pace with mentors available at times that work for you.</p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2">Affordable Rates</h4>
              <p className="text-gray-600">High-quality mentorship at competitive prices to fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h3>
          <Link href="/signup" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Join MentorBridge Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MentorBridge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
