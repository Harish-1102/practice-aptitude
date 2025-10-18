import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserAnswer } from '@/lib/types';

interface QuizStore {
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  startTime: number;
  categoryProgress: { [categoryId: string]: CategoryProgress };

  setCurrentQuestionIndex: (index: number) => void;
  addUserAnswer: (answer: UserAnswer) => void;
  resetQuiz: () => void;
  nextQuestion: () => void;
  getCategoryProgress: (categoryId: string) => CategoryProgress;
  updateCategoryProgress: (categoryId: string, progress: Partial<CategoryProgress>) => void;
}

export interface CategoryProgress {
  attempted: number;
  correct: number;
  wrong: number;
  skipped: number;
  totalQuestions: number;
  lastAttempted: number; // timestamp
  percentage: number;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      userAnswers: [],
      startTime: Date.now(),
      categoryProgress: {},

      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

      addUserAnswer: (answer) =>
        set((state) => {
          const existingIndex = state.userAnswers.findIndex(
            (a) => a.questionId === answer.questionId
          );

          if (existingIndex !== -1) {
            const newAnswers = [...state.userAnswers];
            newAnswers[existingIndex] = answer;
            return { userAnswers: newAnswers };
          }

          return { userAnswers: [...state.userAnswers, answer] };
        }),

      resetQuiz: () =>
        set({
          currentQuestionIndex: 0,
          userAnswers: [],
          startTime: Date.now(),
        }),

      nextQuestion: () =>
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        })),

      getCategoryProgress: (categoryId) => {
        const progress = get().categoryProgress[categoryId];
        return (
          progress || {
            attempted: 0,
            correct: 0,
            wrong: 0,
            skipped: 0,
            totalQuestions: 100,
            lastAttempted: 0,
            percentage: 0,
          }
        );
      },

      updateCategoryProgress: (categoryId, progressUpdate) =>
        set((state) => ({
          categoryProgress: {
            ...state.categoryProgress,
            [categoryId]: {
              ...state.categoryProgress[categoryId],
              ...progressUpdate,
              lastAttempted: Date.now(),
            },
          },
        })),
    }),
    {
      name: 'quiz-storage',
    }
  )
);
