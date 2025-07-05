"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export default function QuizPage({ params }: { params: { id: string } }) {
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_API_BASE_URL}/quiz/${params.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch quiz");

        const data = await response.json();
        setQuiz(data);
      } catch (err) {
        setError("Failed to load quiz data");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [params.id]);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);

    // Show explanation if available
    if (quiz.questions[currentQuestionIndex].explanation) {
      setShowExplanation(true);
    }

    // Check if answer is correct
    const currentQuestion = quiz.questions[currentQuestionIndex];
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d2dcf0] mx-auto mb-4"></div>
          <p>Loading quiz...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-2">
            Error Loading Quiz
          </div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#d2dcf0] text-black px-4 py-2 rounded-lg hover:bg-[#d2dcf0] flex items-center justify-center mx-auto"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );

  if (!quiz)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">Quiz Not Found</div>
          <p className="text-gray-600 mb-4">
            The requested quiz could not be found
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#d2dcf0] text-black px-4 py-2 rounded-lg hover:bg-[#d2dcf0] flex items-center justify-center mx-auto"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const progressPercentage =
    ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header with Home Button */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Home className="h-5 w-5 mr-1" />
            Back to Home
          </button>

          <div className="text-xl font-bold">{quiz.title}</div>

          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {currentQuestionIndex + 1}/{quiz.questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#a0befa] h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {!showResult ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Question Section */}
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestionIndex + 1}
              </h2>
              <p className="text-lg">{currentQuestion.question}</p>
            </div>

            {/* Options Section */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => !selectedOption && handleAnswerSelect(index)}
                  disabled={selectedOption !== null}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    selectedOption === index
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "border-gray-300 hover:bg-gray-50"
                  } ${
                    selectedOption !== null &&
                    index === currentQuestion.correctAnswer
                      ? "border-green-500 bg-green-50"
                      : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Explanation Section */}
            {showExplanation && currentQuestion.explanation && (
              <div className="p-6 bg-blue-50 border-t">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Explanation:
                </h3>
                <p className="text-blue-700">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {selectedOption !== null && (
              <div className="p-6 border-t">
                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {isLastQuestion ? "Finish Quiz" : "Next Question"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>

              <div className="text-4xl font-bold mb-2">
                {score}/{quiz.questions.length}
              </div>
              <div className="text-gray-600 mb-8">
                ({Math.round((score / quiz.questions.length) * 100)}%)
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 mb-8 mx-auto max-w-md">
                <div
                  className="bg-[#183164] h-4 rounded-full"
                  style={{ width: `${(score / quiz.questions.length) * 100}%` }}
                ></div>
              </div>

              <div className="mb-8 text-lg">
                {score === quiz.questions.length ? (
                  <div className="text-green-600 font-semibold">
                    Perfect! 🎉 You aced this quiz!
                  </div>
                ) : score > quiz.questions.length / 2 ? (
                  <div className="text-blue-600 font-semibold">
                    Good job! 👍 Well done!
                  </div>
                ) : (
                  <div className="text-orange-600 font-semibold">
                    Keep practicing! 💪 You'll get better!
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedOption(null);
                    setScore(0);
                    setShowResult(false);
                    setShowExplanation(false);
                  }}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Retake Quiz
                </button>

                <button
                  onClick={() => router.push("/")}
                  className="bg-[#d2dcf0] text-black px-6 py-3 rounded-lg hover:bg-[#9ecae4] flex items-center justify-center"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
