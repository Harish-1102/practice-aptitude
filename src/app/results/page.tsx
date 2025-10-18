'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { useQuizStore } from '@/store/useQuizStore';

export default function ResultsPage() {
  const router = useRouter();
  const { userAnswers, resetQuiz } = useQuizStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && userAnswers.length === 0) {
      router.push('/');
    }
  }, [mounted, userAnswers, router]);

  if (!mounted || userAnswers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20">Loading results...</div>
      </div>
    );
  }

  const totalQuestions = userAnswers.length;
  const correctAnswers = userAnswers.filter((a) => a.isCorrect).length;
  const skippedAnswers = userAnswers.filter((a) => a.selectedAnswer === -1).length;
  const wrongAnswers = totalQuestions - correctAnswers - skippedAnswers;
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const averageTime =
    userAnswers.length > 0
      ? Math.round(userAnswers.reduce((sum, a) => sum + a.timeTaken, 0) / userAnswers.length)
      : 0;

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding!', color: 'text-green-600' };
    if (percentage >= 80) return { grade: 'A', message: 'Excellent!', color: 'text-green-600' };
    if (percentage >= 70) return { grade: 'B', message: 'Good Job!', color: 'text-blue-600' };
    if (percentage >= 60)
      return { grade: 'C', message: 'Keep Practicing!', color: 'text-orange-600' };
    return { grade: 'D', message: 'Need More Practice', color: 'text-red-600' };
  };

  const { grade, message, color } = getGrade();

  const handleTryAgain = () => {
    resetQuiz();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Results Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Results Card */}
        <div className="card p-8 shadow-lg mb-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Test Results
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Here's how you performed</p>
          </div>

          {/* Score Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              {/* Background Circle */}
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                {/* Progress Circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(percentage / 100) * 502.4} 502.4`}
                  strokeLinecap="round"
                  className="text-primary transition-all duration-1000"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                  {percentage}%
                </span>
                <span className={`text-2xl font-bold ${color} mt-1`}>{grade}</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <h2 className={`text-2xl font-bold text-center mb-8 ${color}`}>{message}</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Correct */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {correctAnswers}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Correct</div>
            </div>

            {/* Wrong */}
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                {wrongAnswers}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Wrong</div>
            </div>

            {/* Skipped */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {skippedAnswers}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Skipped</div>
            </div>

            {/* Total */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {totalQuestions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total</div>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Detailed Statistics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {percentage}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Average Time per Question</span>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {averageTime}s
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {correctAnswers}/{totalQuestions - skippedAnswers} attempted
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1">
              <button className="w-full btn-primary py-3">Back to Home</button>
            </Link>
            <button onClick={handleTryAgain} className="flex-1 btn-secondary py-3">
              Practice Again
            </button>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="card p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            💡 Performance Tips
          </h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            {percentage >= 80 ? (
              <>
                <p>✅ Great job! You have a strong understanding of the concepts.</p>
                <p>🎯 Try harder difficulty levels to challenge yourself further.</p>
                <p>📚 Explore other categories to broaden your knowledge.</p>
              </>
            ) : percentage >= 60 ? (
              <>
                <p>👍 Good effort! You're on the right track.</p>
                <p>📖 Review the explanations for questions you got wrong.</p>
                <p>🔄 Practice similar questions to improve your score.</p>
              </>
            ) : (
              <>
                <p>💪 Don't worry! Everyone starts somewhere.</p>
                <p>📚 Focus on understanding the basics first.</p>
                <p>🔄 Practice regularly to see improvement.</p>
                <p>💡 Take time to read the explanations carefully.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
