

import { NextRequest, NextResponse } from "next/server";

type Quiz = {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questionCount: number;
  category: string;
};

type QuizzesByCategory = {
  [key: string]: Quiz[];
};

const quizzes: QuizzesByCategory = {
  history: [
    {
      id: "history-1",
      title: "World War II",
      description: "Test your knowledge about the Second World War",
      difficulty: "Medium",
      questionCount: 5,
      category: "history",
    },
    {
      id: "history-2",
      title: "Ancient Civilizations",
      description: "Explore ancient cultures and empires",
      difficulty: "Hard",
      questionCount: 4,
      category: "history",
    },
    {
      id: "history-3",
      title: "American Revolution",
      description: "Learn about the birth of America",
      difficulty: "Easy",
      questionCount: 3,
      category: "history",
    },
  ],
  science: [
    {
      id: "science-1",
      title: "Physics Basics",
      description: "Fundamental physics concepts",
      difficulty: "Medium",
      questionCount: 4,
      category: "science",
    },
    {
      id: "science-2",
      title: "Chemistry Elements",
      description: "Periodic table and chemical reactions",
      difficulty: "Hard",
      questionCount: 5,
      category: "science",
    },
    {
      id: "science-3",
      title: "Biology Basics",
      description: "Life sciences fundamentals",
      difficulty: "Easy",
      questionCount: 3,
      category: "science",
    },
    {
      id: "science-4",
      title: "Space and Astronomy",
      description: "Explore the cosmos",
      difficulty: "Medium",
      questionCount: 4,
      category: "science",
    },
  ],
  math: [
    {
      id: "math-1",
      title: "Algebra Basics",
      description: "Linear equations and functions",
      difficulty: "Easy",
      questionCount: 4,
      category: "math",
    },
    {
      id: "math-2",
      title: "Geometry",
      description: "Shapes, angles, and measurements",
      difficulty: "Medium",
      questionCount: 5,
      category: "math",
    },
  ],
  programming: [
    {
      id: "programming-1",
      title: "JavaScript Fundamentals",
      description: "Core JavaScript concepts",
      difficulty: "Medium",
      questionCount: 5,
      category: "programming",
    },
    {
      id: "programming-2",
      title: "React Basics",
      description: "Component-based development",
      difficulty: "Hard",
      questionCount: 4,
      category: "programming",
    },
    {
      id: "programming-3",
      title: "Data Structures",
      description: "Arrays, objects, and algorithms",
      difficulty: "Hard",
      questionCount: 3,
      category: "programming",
    },
  ],
};
export async function GET(
  req: NextRequest,
  { params }: { params: { category: string } }
) {
  const categoryKey = params.category;
  const categoryQuizzes = quizzes[categoryKey];

  if (!categoryQuizzes) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json({ quizzes: categoryQuizzes });
}
