import Link from "next/link";
import { ArrowRight, Play, Home } from "lucide-react";

export default function QuizCard({ quiz }: { quiz: any }) {
  return (
    <div className="group relative bg-gradient-to-br from-[#d2dcf0] to-gray-50 rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
      {/* Home Button - Top Right */}
      <div className="absolute top-4 right-4">
        <Link
          href="/"
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100"
          title="Go to Home"
        >
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
      </div>

      {/* Quiz Content */}
      <Link href={`/quiz/${quiz.id}`} className="block">
        <div className="flex items-start justify-between mb-4 pr-10">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
              {quiz.title}
            </h3>
            <p className="text-gray-600 leading-relaxed line-clamp-2">
              {quiz.description}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Play className="w-5 h-5 text-blue-600 ml-0.5" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            <span>Start Quiz</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            Quiz
          </div>
        </div>
      </Link>
    </div>
  );
}
