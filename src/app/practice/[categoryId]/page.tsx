'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import CurrentScoreModal from '@/components/CurrentScoreModal';
import { getQuestionsByCategory, getCategoryById } from '@/lib/questions';
import { useQuizStore } from '@/store/useQuizStore';

export default function PracticePage({ params }: { params: { categoryId: string } }) {
  const router = useRouter();
  const { currentQuestionIndex, addUserAnswer, nextQuestion, resetQuiz, userAnswers } =
    useQuizStore();

  const [questions] = useState(() => getQuestionsByCategory(params.categoryId));
  const [category] = useState(() => getCategoryById(params.categoryId));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime] = useState(Date.now());
  const [showCurrentScoreModal, setShowCurrentScoreModal] = useState(false);

  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  useEffect(() => {
    if (questions.length === 0) {
      router.push('/');
    }
  }, [questions, router]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20">Loading...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;

    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    addUserAnswer({
      questionId: currentQuestion.id,
      selectedAnswer: selectedOption,
      isCorrect: selectedOption === currentQuestion.correctAnswer,
      timeTaken,
    });
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      router.push('/results');
    }
  };

  const handleSkip = () => {
    addUserAnswer({
      questionId: currentQuestion.id,
      selectedAnswer: -1,
      isCorrect: false,
      timeTaken: 0,
    });

    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      router.push('/results');
    }
  };

  const getOptionClass = (index: number) => {
    let baseClass =
      'w-full text-left p-4 border-2 rounded transition-all cursor-pointer flex items-center space-x-3';

    if (!showExplanation) {
      return `${baseClass} ${
        selectedOption === index
          ? 'border-primary bg-green-50 dark:bg-green-900/20'
          : 'border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary'
      }`;
    }

    if (index === currentQuestion.correctAnswer) {
      return `${baseClass} border-green-500 bg-green-50 dark:bg-green-900/20`;
    }

    if (selectedOption === index && index !== currentQuestion.correctAnswer) {
      return `${baseClass} border-red-500 bg-red-50 dark:bg-red-900/20`;
    }

    return `${baseClass} border-gray-300 dark:border-gray-600 opacity-50`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <Header />

      {/* Progress Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-gray-300 dark:border-gray-700 py-3 sticky top-14 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-2">
            <Link
              href="/"
              className="text-sm text-primary hover:text-primary/80 flex items-center space-x-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Home</span>
            </Link>

            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {category?.name}
            </h1>

            <button
              onClick={() => setShowCurrentScoreModal(true)}
              className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <span>📊</span>
              <span>View Score</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Counter */}
          <div className="text-center mt-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Question{' '}
              <span className="font-bold text-gray-800 dark:text-gray-100">
                {currentQuestionIndex + 1}
              </span>{' '}
              of {questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="card p-6 shadow-lg">
          {/* Question Text */}
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showExplanation}
                className={getOptionClass(index)}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-800 dark:text-gray-200 flex-1">{option}</span>

                {showExplanation && index === currentQuestion.correctAnswer && (
                  <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                )}
                {showExplanation &&
                  selectedOption === index &&
                  index !== currentQuestion.correctAnswer && (
                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                  )}
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                selectedOption === currentQuestion.correctAnswer
                  ? 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500'
                  : 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500'
              }`}
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <>
                    <span className="mr-2">✅</span>Correct Answer
                  </>
                ) : (
                  <>
                    <span className="mr-2" style={{ fontSize: '0.8rem' }}>
                      ❌
                    </span>
                    Wrong Answer
                  </>
                )}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Explanation:</strong> {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-3">
            {!showExplanation ? (
              <>
                <button onClick={handleSkip} className="btn-secondary px-6 py-3">
                  Skip Question
                </button>
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              </>
            ) : (
              <button
                onClick={handleNext}
                className="btn-primary px-8 py-3 flex items-center space-x-2"
              >
                <span>
                  {currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Next Question'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Modal */}
      <CurrentScoreModal
        isOpen={showCurrentScoreModal}
        onClose={() => setShowCurrentScoreModal(false)}
        categoryId={params.categoryId}
        categoryName={category?.name || ''}
        currentAnswers={userAnswers}
        totalQuestions={questions.length}
      />
    </div>
  );
}
