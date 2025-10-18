import { Question, Category } from './types';
import { numericalQuestions } from './numerical';
import { logicalQuestions } from './logical';
import { verbalQuestions } from './verbal';
import { dataQuestions } from './data';

export const categories: Category[] = [
  {
    id: 'numerical',
    name: 'Numerical Aptitude',
    icon: '🔢',
    description: 'Complex calculations, probability, permutations',
    questionCount: 100,
  },
  {
    id: 'logical',
    name: 'Logical Reasoning',
    icon: '🧩',
    description: 'Pattern recognition, sequences, analytical reasoning',
    questionCount: 100,
  },
  {
    id: 'verbal',
    name: 'Verbal Ability',
    icon: '📖',
    description: 'Reading comprehension, critical reasoning, vocabulary',
    questionCount: 100,
  },
  {
    id: 'data',
    name: 'Data Interpretation',
    icon: '📊',
    description: 'Complex data analysis, charts, statistical reasoning',
    questionCount: 100,
  },
];

export const questions: Question[] = [
  ...numericalQuestions,
  ...logicalQuestions,
  ...verbalQuestions,
  ...dataQuestions,
];

// Helper functions
export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions.filter((q) => q.category === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getAllQuestions(): Question[] {
  return questions;
}

export function getRandomQuestions(count: number, categoryId?: string): Question[] {
  const pool = categoryId ? getQuestionsByCategory(categoryId) : questions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
