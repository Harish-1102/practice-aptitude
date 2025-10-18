export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  questionCount: number;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number; // -1 means skipped
  isCorrect: boolean;
  timeTaken: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  startTime: number;
  isQuizActive: boolean;
}
