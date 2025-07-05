import { NextRequest, NextResponse } from 'next/server';

const quizData: Record<string, any> = {
  'history-1': {
    id: 'history-1',
    title: 'World War II',
    description: 'Test your knowledge about the Second World War',
    category: 'history',
    questions: [
      {
        id: 1,
        question: 'When did World War II begin?',
        options: ['1939', '1940', '1941', '1942'],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: 'Which country was NOT part of the Axis powers?',
        options: ['Germany', 'Italy', 'Japan', 'Soviet Union'],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: 'What was the code name for the D-Day invasion?',
        options: [
          'Operation Barbarossa',
          'Operation Overlord',
          'Operation Torch',
          'Operation Market Garden',
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: 'Which city was the first to be attacked by an atomic bomb?',
        options: ['Nagasaki', 'Hiroshima', 'Tokyo', 'Kyoto'],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'When did World War II end in Europe?',
        options: ['May 8, 1945', 'August 15, 1945', 'September 2, 1945', 'December 7, 1945'],
        correctAnswer: 0,
      },
    ],
  },
  'science-1': {
    id: 'science-1',
    title: 'Physics Basics',
    description: 'Fundamental physics concepts',
    category: 'science',
    questions: [
      {
        id: 1,
        question: 'What is the speed of light in vacuum?',
        options: ['299,792,458 m/s', '300,000,000 m/s', '186,000 miles/s', 'All of the above'],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What is Newton's first law of motion?",
        options: [
          'F = ma',
          'An object at rest stays at rest',
          'For every action, there is an equal and opposite reaction',
          'Energy cannot be created or destroyed',
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'What is the unit of electrical resistance?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'What particle has no electric charge?',
        options: ['Proton', 'Electron', 'Neutron', 'Ion'],
        correctAnswer: 2,
      },
    ],
  },
  'programming-1': {
    id: 'programming-1',
    title: 'JavaScript Fundamentals',
    description: 'Core JavaScript concepts',
    category: 'programming',
    questions: [
      {
        id: 1,
        question: 'What does "typeof null" return in JavaScript?',
        options: ['null', 'undefined', 'object', 'boolean'],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'What is the difference between "==" and "===" in JavaScript?',
        options: ['No difference', '=== checks type and value', '== is faster', '=== is deprecated'],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: 'What does "hoisting" mean in JavaScript?',
        options: ['Moving variables to the top', 'Optimizing code', 'Error handling', 'Memory management'],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: 'Which of these is NOT a JavaScript data type?',
        options: ['String', 'Number', 'Boolean', 'Float'],
        correctAnswer: 3,
      },
    ],
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const quiz = quizData[id];

  if (!quiz) {
    return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
  }

  return NextResponse.json(quiz);
}
