import { Link } from "react-router-dom";
import { CheckCircle, Clock, Tag, BarChart2, Sparkles, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import { getRandomQuote } from "../data/quotes";

const HomePage = () => {
  const [showQuote, setShowQuote] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    // Set a random quote when component mounts
    setCurrentQuote(getRandomQuote());

    // Hide the quote after 5 seconds
    const timer = setTimeout(() => {
      setShowQuote(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote());
    setShowQuote(true);
    setTimeout(() => setShowQuote(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Floating Quote Banner */}
      {showQuote && currentQuote && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-50 animate-fade-in">
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 flex items-start">
            <Sparkles className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-green-800 italic">"{currentQuote.quote}"</p>
              <p className="text-right text-green-600 text-sm mt-1">
                — {currentQuote.author}
              </p>
            </div>
            <button
              onClick={() => setShowQuote(false)}
              className="text-green-500 hover:text-green-700 ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-300 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-emerald-300 blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Logo size="large" showTagline={true} />
              <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Smart tasks,{" "}
                <span className="text-green-600 animate-pulse">
                  smarter you
                </span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Organize your work and life with Tick&Tick. The smart task
                manager that helps you stay focused and productive.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform"
                >
                  Get Started - It's Free
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors shadow-sm"
                >
                  Sign In
                </Link>
              </div>
              <button
                onClick={handleNewQuote}
                className="mt-6 flex items-center text-green-600 hover:text-green-800 transition-colors"
              >
                <Sparkles className="mr-1" size={16} />
                Show me some motivation
              </button>
            </div>
            <div className="hidden md:block relative">
              <img
                src="../public/okok.webp"
                alt="Task Management"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-lg opacity-80 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-100 rounded-full opacity-80 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features that make task management{" "}
              <span className="text-green-600">a breeze</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to stay organized and productive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="text-green-600" size={24} />,
                bg: "bg-green-100",
                title: "Task Management",
                desc: "Create, organize, and track your tasks with ease. Mark tasks as complete when you're done.",
              },
              {
                icon: <Tag className="text-emerald-600" size={24} />,
                bg: "bg-emerald-100",
                title: "Custom Categories",
                desc: "Organize tasks with custom categories. Create your own or use our default ones.",
              },
              {
                icon: <Clock className="text-amber-600" size={24} />,
                bg: "bg-amber-100",
                title: "Priority Levels",
                desc: "Set priority levels for your tasks to focus on what matters most to you.",
              },
              {
                icon: <BarChart2 className="text-purple-600" size={24} />,
                bg: "bg-purple-100",
                title: "Task Analytics",
                desc: "Get insights into your productivity with task completion statistics.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 group"
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-white blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-white blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get organized?
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Start using Tick&Tick today and take control of your tasks.
            </p>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center bg-white text-green-600 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <Sparkles className="mr-2" size={16} />
                Sign Up for Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-gray-500">
                The smart task manager that helps you stay focused and
                productive.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-green-600 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
