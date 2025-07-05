export interface Quiz {
  id: string;
  title: string;
  category: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'history',
    name: 'History',
    description: 'Test your knowledge of historical events and figures',
    icon: '🏛️',
    color: 'bg-amber-500'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the wonders of physics, chemistry, and biology',
    icon: '🔬',
    color: 'bg-blue-500'
  },
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Challenge yourself with mathematical problems',
    icon: '📐',
    color: 'bg-green-500'
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Test your coding knowledge and best practices',
    icon: '💻',
    color: 'bg-purple-500'
  }
];

export const quizzes: Quiz[] = [
  {
    id: 'world-war-2',
    title: 'World War II Basics',
    category: 'history',
    description: 'Test your knowledge about the Second World War',
    questions: [
      {
        id: 'ww2-1',
        question: 'In which year did World War II begin?',
        options: ['1938', '1939', '1940', '1941'],
        correctAnswer: 1,
        explanation: 'World War II began in 1939 when Germany invaded Poland.'
      },
      {
        id: 'ww2-2',
        question: 'Which event brought the United States into World War II?',
        options: ['Pearl Harbor Attack', 'Battle of Midway', 'D-Day', 'Battle of Britain'],
        correctAnswer: 0,
        explanation: 'The attack on Pearl Harbor on December 7, 1941, brought the US into the war.'
      },
      {
        id: 'ww2-3',
        question: 'Who was the Prime Minister of Britain during most of World War II?',
        options: ['Neville Chamberlain', 'Winston Churchill', 'Clement Attlee', 'Anthony Eden'],
        correctAnswer: 1,
        explanation: 'Winston Churchill served as Prime Minister from 1940 to 1945.'
      }
    ]
  },
  {
    id: 'ancient-civilizations',
    title: 'Ancient Civilizations',
    category: 'history',
    description: 'Journey through ancient Egypt, Greece, and Rome',
    questions: [
      {
        id: 'ancient-1',
        question: 'Which river was central to ancient Egyptian civilization?',
        options: ['Euphrates', 'Tigris', 'Nile', 'Amazon'],
        correctAnswer: 2,
        explanation: 'The Nile River was the lifeline of ancient Egyptian civilization.'
      },
      {
        id: 'ancient-2',
        question: 'Who was the famous philosopher teacher of Alexander the Great?',
        options: ['Socrates', 'Plato', 'Aristotle', 'Homer'],
        correctAnswer: 2,
        explanation: 'Aristotle was the tutor of Alexander the Great.'
      }
    ]
  },
  {
    id: 'basic-physics',
    title: 'Physics Fundamentals',
    category: 'science',
    description: 'Basic concepts in physics and mechanics',
    questions: [
      {
        id: 'physics-1',
        question: 'What is the speed of light in vacuum?',
        options: ['300,000 km/s', '299,792,458 m/s', '186,000 mph', 'All of the above'],
        correctAnswer: 1,
        explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second.'
      },
      {
        id: 'physics-2',
        question: 'What is Newton\'s First Law of Motion?',
        options: ['F = ma', 'Energy cannot be created or destroyed', 'An object at rest stays at rest unless acted upon by a force', 'For every action, there is an equal and opposite reaction'],
        correctAnswer: 2,
        explanation: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force.'
      }
    ]
  },
  {
    id: 'chemistry-basics',
    title: 'Chemistry Essentials',
    category: 'science',
    description: 'Fundamental chemistry concepts and elements',
    questions: [
      {
        id: 'chem-1',
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 2,
        explanation: 'Gold\'s chemical symbol is Au, from the Latin word "aurum".'
      },
      {
        id: 'chem-2',
        question: 'How many protons does a carbon atom have?',
        options: ['4', '6', '8', '12'],
        correctAnswer: 1,
        explanation: 'Carbon has 6 protons, which defines its atomic number.'
      }
    ]
  },
  {
    id: 'algebra-basics',
    title: 'Algebra Fundamentals',
    category: 'math',
    description: 'Basic algebraic equations and concepts',
    questions: [
      {
        id: 'algebra-1',
        question: 'What is the value of x in the equation: 2x + 5 = 13?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '2x + 5 = 13, so 2x = 8, therefore x = 4.'
      },
      {
        id: 'algebra-2',
        question: 'What is the slope of the line y = 3x + 2?',
        options: ['2', '3', '5', '1'],
        correctAnswer: 1,
        explanation: 'In the equation y = mx + b, m represents the slope. Here, the slope is 3.'
      }
    ]
  },
  {
    id: 'geometry-basics',
    title: 'Geometry Essentials',
    category: 'math',
    description: 'Basic geometric shapes and formulas',
    questions: [
      {
        id: 'geo-1',
        question: 'What is the area of a circle with radius 5?',
        options: ['25π', '10π', '5π', '50π'],
        correctAnswer: 0,
        explanation: 'Area of a circle = πr². With r = 5, area = π × 5² = 25π.'
      }
    ]
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Fundamentals',
    category: 'programming',
    description: 'Core JavaScript concepts and syntax',
    questions: [
      {
        id: 'js-1',
        question: 'Which of the following is NOT a JavaScript data type?',
        options: ['string', 'boolean', 'integer', 'undefined'],
        correctAnswer: 2,
        explanation: 'JavaScript has "number" type, but not specifically "integer". It treats all numbers as floating-point.'
      },
      {
        id: 'js-2',
        question: 'What does "===" operator do in JavaScript?',
        options: ['Assignment', 'Equality with type coercion', 'Strict equality', 'Not equal'],
        correctAnswer: 2,
        explanation: 'The "===" operator checks for strict equality without type coercion.'
      }
    ]
  },
  {
    id: 'react-basics',
    title: 'React Fundamentals',
    category: 'programming',
    description: 'Essential React concepts and hooks',
    questions: [
      {
        id: 'react-1',
        question: 'What is JSX?',
        options: ['A JavaScript framework', 'A syntax extension for JavaScript', 'A database query language', 'A CSS preprocessor'],
        correctAnswer: 1,
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React components.'
      },
      {
        id: 'react-2',
        question: 'Which hook is used for state management in functional components?',
        options: ['useEffect', 'useState', 'useContext', 'useMemo'],
        correctAnswer: 1,
        explanation: 'useState is the hook used to add state to functional components in React.'
      }
    ]
  }
];
