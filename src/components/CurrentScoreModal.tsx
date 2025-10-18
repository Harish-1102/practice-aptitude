'use client';

import { useQuizStore, CategoryProgress } from '@/store/useQuizStore';
import { useEffect, useState } from 'react';

interface CurrentScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryId: string;
  categoryName: string;
  currentAnswers: any[];
  totalQuestions: number;
}

export default function CurrentScoreModal({
  isOpen,
  onClose,
  categoryId,
  categoryName,
  currentAnswers,
  totalQuestions,
}: CurrentScoreModalProps) {
  const { getCategoryProgress } = useQuizStore();
  const [currentScore, setProgress] = useState<CategoryProgress | null>(null);

  useEffect(() => {
    if (isOpen) {
      const savedProgress = getCategoryProgress(categoryId);

      // Calculate current session stats
      const attempted = currentAnswers.length;
      const correct = currentAnswers.filter((a) => a.isCorrect).length;
      const skipped = currentAnswers.filter((a) => a.selectedAnswer === -1).length;
      const wrong = attempted - correct - skipped;
      const percentage = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

      setProgress({
        attempted,
        correct,
        wrong,
        skipped,
        totalQuestions,
        lastAttempted: Date.now(),
        percentage,
      });
    }
  }, [isOpen, currentAnswers, categoryId, totalQuestions, getCategoryProgress]);

  if (!isOpen || !currentScore) return null;

  const remainingQuestions = totalQuestions - currentScore.attempted;
  const completionPercentage = Math.round((currentScore.attempted / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your CurrentScore</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Category Name */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{categoryName}</h3>
        </div>

        {/* Circular CurrentScore */}
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40">
            <svg className="transform -rotate-90 w-40 h-40">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                className="text-gray-200 dark:text-gray-700"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${(completionPercentage / 100) * 439.6} 439.6`}
                strokeLinecap="round"
                className="text-primary transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {completionPercentage}%
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400">Complete</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentScore.attempted}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Attempted</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {currentScore.correct}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Correct</div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {currentScore.wrong}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Wrong</div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {currentScore.skipped}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Skipped</div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</span>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {currentScore.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${currentScore.percentage}%` }}
            />
          </div>
        </div>

        {/* Remaining Questions */}
        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-bold text-gray-800 dark:text-gray-100">{remainingQuestions}</span>{' '}
            questions remaining
          </p>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="w-full btn-primary py-3 rounded-lg">
          Continue Practice
        </button>
      </div>
    </div>
  );
}
