import { Metadata } from 'next';
import QuizCard from '@/component/QuizCard';

type Params = {
  category: string;
};

export async function generateMetadata({ params }: { params: Params }){
  const { category } = params;

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} Quizzes | Micro-Quiz`,
    description: `Test your knowledge with our ${categoryName} quizzes`,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = params;

  const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}/quizzes/${category}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    return <div className="text-center text-red-500 mt-10">Failed to load quizzes</div>;
  }


  const quizzes = await response.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Quizzes</h1>

      {quizzes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No quizzes available in this category yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.quizzes?.map((quiz: any) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      )}
    </div>
  );
}
