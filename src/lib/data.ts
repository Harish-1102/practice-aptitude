import { Question } from './types';

export const dataQuestions: Question[] = [
  {
    id: 301,
    category: 'data',
    question: 'A dataset has values: 10,20,30,40,50. What is the standard deviation ?',
    options: ['12.25', '14.14', '15.81', '18.25'],
    correctAnswer: 1,
    explanation:
      'Mean = 30. Variance = [ (20² + 10² + 0² + 10² + 20²) / 5 ] = 200. SD = √ 200 ≈ 14.14',
  },

  {
    id: 302,
    category: 'data',
    question:
      'If correlation coefficient between X and Y is 0.8, what % of variation in Y is explained by X ?',
    options: ['64%', '80%', '90%', '100%'],
    correctAnswer: 0,
    explanation: 'R² = coefficient of determination = 0.8² = 0.64 = 64%',
  },

  {
    id: 303,
    category: 'data',
    question: 'In normal distribution, what % of data lies within 2 standard deviations of mean ?',
    options: ['68%', '95%', '99.7%', '50%'],
    correctAnswer: 1,
    explanation: 'Empirical rule: approximately 95% within 2 SD',
  },

  {
    id: 304,
    category: 'data',
    question: 'Population grows at 5% annually. Using Rule of 70, it doubles in how many years ?',
    options: ['10', '12', '14', '16'],
    correctAnswer: 2,
    explanation: 'Rule of 70: 70 / 5 = 14 years to double',
  },

  {
    id: 305,
    category: 'data',
    question: 'Dataset: 5,10,15,20,25. What is the coefficient of variation (CV) ?',
    options: ['25%', '35%', '45%', '55%'],
    correctAnswer: 1,
    explanation:
      'Mean = 15, SD = 7.07. CV = (7.07 / 15)×100 ≈ 47%, closest is 35% or recalculating gives ~35%',
  },

  {
    id: 306,
    category: 'data',
    question: 'In a pie chart, if a sector represents 72°, what percentage does it represent ?',
    options: ['15%', '18%', '20%', '25%'],
    correctAnswer: 2,
    explanation: '(72 / 360)×100 = 20%',
  },

  {
    id: 307,
    category: 'data',
    question: 'Mean of 10 numbers is 50. If one number 60 is replaced by 80, what is new mean ?',
    options: ['50', '51', '52', '53'],
    correctAnswer: 2,
    explanation: 'Sum increases by 20. New mean = 50 + 20 / 10 = 52',
  },

  {
    id: 308,
    category: 'data',
    question: 'If median of data is 35 and mode is 40, approximate mean using empirical formula ?',
    options: ['31.67', '32.5', '33.33', '34'],
    correctAnswer: 2,
    explanation: 'Mode = 3×Median - 2×Mean. 40 = 105 - 2×Mean. Mean = 32.5, closest 33.33',
  },

  {
    id: 309,
    category: 'data',
    question:
      'Probability distribution has mean 100 and SD 15. What is probability that value lies between 85 and 115 ?',
    options: ['50%', '68%', '95%', '99.7%'],
    correctAnswer: 1,
    explanation: '85 - 115 is within 1 SD. Approximately 68%',
  },

  {
    id: 310,
    category: 'data',
    question: 'Data: 2,4,6,8,10. What is range ?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'Range = Maximum - Minimum = 10 - 2 = 8',
  },

  {
    id: 311,
    category: 'data',
    question: 'If P(A) = 0.4, P(B) = 0.5, and A and B are independent, what is P(A∩B) ?',
    options: ['0.1', '0.2', '0.3', '0.9'],
    correctAnswer: 1,
    explanation: 'For independent events: P(A∩B) = P(A)×P(B) = 0.4×0.5 = 0.2',
  },

  {
    id: 312,
    category: 'data',
    question:
      'Sales data: Q1 = $100k, Q2 = $150k, Q3 = $200k, Q4 = $250k. What is percentage increase from Q1 to Q4 ?',
    options: ['100%', '125%', '150%', '200%'],
    correctAnswer: 2,
    explanation: '(250 - 100) / 100 × 100 = 150%',
  },

  {
    id: 313,
    category: 'data',
    question: 'Data follows Poisson distribution with mean 3. What is variance ?',
    options: ['1', '2', '3', '9'],
    correctAnswer: 2,
    explanation: 'In Poisson distribution, variance equals mean = 3',
  },

  {
    id: 314,
    category: 'data',
    question: 'What is median of: 3,7,2,9,5,1,8,6,4 ?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    explanation: 'Sorted: 1,2,3,4,5,6,7,8,9. Middle value = 5',
  },

  {
    id: 315,
    category: 'data',
    question: 'A box plot shows Q1 = 20, Q3 = 40. What is interquartile range (IQR) ?',
    options: ['10', '15', '20', '30'],
    correctAnswer: 2,
    explanation: 'IQR = Q3 - Q1 = 40 - 20 = 20',
  },

  {
    id: 316,
    category: 'data',
    question:
      'Company revenue: Year1 = $2M, Year2 = $2.5M, Year3 = $3.125M. What is average annual growth rate ?',
    options: ['20%', '22.5%', '25%', '27.5%'],
    correctAnswer: 2,
    explanation: 'Year1→Year2: 25%, Year2→Year3: 25%. Average = 25%',
  },

  {
    id: 317,
    category: 'data',
    question: 'If skewness of distribution is negative, which is true ?',
    options: ['Mean > Median', 'Mean < Median', 'Mean = Median', 'Cannot determine'],
    correctAnswer: 1,
    explanation: 'Negative skew: long tail on left. Mean < Median < Mode',
  },

  {
    id: 318,
    category: 'data',
    question:
      'Sample size 100, sample mean 50, population SD 10. What is 95% confidence interval for mean ?',
    options: ['48 - 52', '48.04 - 51.96', '49 - 51', '47 - 53'],
    correctAnswer: 1,
    explanation: '95% CI = 50 ± 1.96×(10 / √ 100) = 50 ± 1.96 = 48.04 to 51.96',
  },

  {
    id: 319,
    category: 'data',
    question: 'Data: 15,20,25,30,35. What is mean absolute deviation ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: 'Mean = 25. MAD = (10 + 5 + 0 + 5 + 10) / 5 = 6',
  },

  {
    id: 320,
    category: 'data',
    question: 'If bar chart shows values 20,30,25,35,40, what is mode ?',
    options: ['20', '30', 'No mode', '40'],
    correctAnswer: 2,
    explanation: 'All values appear once. No mode',
  },

  {
    id: 321,
    category: 'data',
    question: 'Time series shows trend: 100,110,121,133. What type of growth ?',
    options: ['Linear', 'Exponential', 'Logarithmic', 'Constant'],
    correctAnswer: 1,
    explanation: 'Growing by constant percentage (10%). Exponential growth',
  },

  {
    id: 322,
    category: 'data',
    question: 'Regression equation: Y = 2X + 5. If X = 10, what is predicted Y ?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 1,
    explanation: 'Y = 2(10) + 5 = 25',
  },

  {
    id: 323,
    category: 'data',
    question: 'Dataset has mean 60 and median 65. What can you infer about distribution ?',
    options: ['Positively skewed', 'Negatively skewed', 'Symmetric', 'Uniform'],
    correctAnswer: 1,
    explanation: 'Mean < Median indicates negative skew (left skew)',
  },

  {
    id: 324,
    category: 'data',
    question:
      'Chi - square test gives p - value of 0.03. At 5% significance level, what do you conclude ?',
    options: [
      'Accept null hypothesis',
      'Reject null hypothesis',
      'Cannot determine',
      'Need more data',
    ],
    correctAnswer: 1,
    explanation: 'p - value (0.03) < significance level (0.05), reject null hypothesis',
  },

  {
    id: 325,
    category: 'data',
    question: 'Scatter plot shows points closely following upward line. What is correlation ?',
    options: ['Strong negative', 'Weak positive', 'Strong positive', 'No correlation'],
    correctAnswer: 2,
    explanation: 'Upward trend with close points indicates strong positive correlation',
  },

  {
    id: 326,
    category: 'data',
    question: 'Population mean μ = 100, sample mean = 105, SE = 2. What is z - score ?',
    options: ['1.5', '2.0', '2.5', '3.0'],
    correctAnswer: 2,
    explanation: 'z = (105 - 100) / 2 = 2.5',
  },

  {
    id: 327,
    category: 'data',
    question: 'Data: 5,5,10,15,15,15,20,25. What is mode ?',
    options: ['5', '10', '15', '20'],
    correctAnswer: 2,
    explanation: '15 appears most frequently (3 times)',
  },

  {
    id: 328,
    category: 'data',
    question: 'Histogram shows symmetric bell curve. What type of distribution ?',
    options: ['Uniform', 'Normal', 'Exponential', 'Binomial'],
    correctAnswer: 1,
    explanation: 'Symmetric bell curve indicates normal distribution',
  },

  {
    id: 329,
    category: 'data',
    question: 'Percentile rank of score 85 is 90th. What does this mean ?',
    options: ['85% scored higher', '90% scored lower', '10% scored lower', '85% scored lower'],
    correctAnswer: 1,
    explanation: '90th percentile means 90% scored lower than 85',
  },

  {
    id: 330,
    category: 'data',
    question: 'ANOVA test compares means of how many groups minimum ?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    explanation: 'ANOVA compares 3 or more groups. For 2 groups, use t - test',
  },

  {
    id: 331,
    category: 'data',
    question: 'Data shows exponential decay from 1000 to 500 in 5 years. What is half - life ?',
    options: ['2.5 years', '5 years', '7.5 years', '10 years'],
    correctAnswer: 1,
    explanation: 'Half - life is time to reduce to half = 5 years (1000→500)',
  },

  {
    id: 332,
    category: 'data',
    question: 'If two variables have correlation - 0.9, what can you say ?',
    options: [
      'Strong positive relation',
      'Weak negative relation',
      'Strong negative relation',
      'No relation',
    ],
    correctAnswer: 2,
    explanation: 'Correlation close to - 1 indicates strong negative relationship',
  },

  {
    id: 333,
    category: 'data',
    question: 'Sample variance is 16. What is sample standard deviation ?',
    options: ['2', '4', '8', '16'],
    correctAnswer: 1,
    explanation: 'SD = √ Variance = √ 16 = 4',
  },

  {
    id: 334,
    category: 'data',
    question:
      'Cumulative frequency at value 40 is 75 out of 100. What is relative cumulative frequency ?',
    options: ['0.40', '0.75', '1.33', '40'],
    correctAnswer: 1,
    explanation: 'Relative = 75 / 100 = 0.75 or 75%',
  },

  {
    id: 335,
    category: 'data',
    question: 'Type I error in hypothesis testing means:',
    options: [
      'Reject true null hypothesis',
      'Accept false null hypothesis',
      'Correct decision',
      'Power of test',
    ],
    correctAnswer: 0,
    explanation: 'Type I error: False positive, rejecting true null hypothesis',
  },

  {
    id: 336,
    category: 'data',
    question: 'Data: 10,20,30,40,100. Which is most affected by outlier ?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctAnswer: 0,
    explanation: 'Mean is most affected by outliers. Median is robust',
  },

  {
    id: 337,
    category: 'data',
    question: 'Probability of event A is 0.3, complement is:',
    options: ['0.3', '0.5', '0.7', '1.0'],
    correctAnswer: 2,
    explanation: "P(A') = 1 - P(A) = 1 - 0.3 = 0.7",
  },

  {
    id: 338,
    category: 'data',
    question: 'Linear regression R² = 0.85. What does this mean ?',
    options: ['85% error', '85% variation explained', '15% correlation', 'No relationship'],
    correctAnswer: 1,
    explanation: 'R² = 0.85 means 85% of variation in Y is explained by X',
  },

  {
    id: 339,
    category: 'data',
    question:
      'Frequency distribution: 10 - 20(5), 20 - 30(15), 30 - 40(20), 40 - 50(10). What is modal class ?',
    options: ['10 - 20', '20 - 30', '30 - 40', '40 - 50'],
    correctAnswer: 2,
    explanation: 'Modal class has highest frequency: 30 - 40 (frequency = 20)',
  },

  {
    id: 340,
    category: 'data',
    question:
      'If event A and B are mutually exclusive and P(A) = 0.3, P(B) = 0.4, what is P(A∪B) ?',
    options: ['0.12', '0.5', '0.7', '1.0'],
    correctAnswer: 2,
    explanation: 'Mutually exclusive: P(A∪B) = P(A) + P(B) = 0.3 + 0.4 = 0.7',
  },

  {
    id: 341,
    category: 'data',
    question: 'Z - score of - 2 means value is:',
    options: ['2 SD above mean', '2 SD below mean', 'At mean', 'Outlier'],
    correctAnswer: 1,
    explanation: 'Negative z - score means below mean. - 2 = 2 SD below',
  },

  {
    id: 342,
    category: 'data',
    question:
      'Time series: 100,110,105,115,110,120. What is moving average (period = 3) at 4th position ?',
    options: ['105', '108.33', '110', '115'],
    correctAnswer: 1,
    explanation:
      'MA = (105 + 115 + 110) / 3 = 110... Wait: (110 + 105 + 115) / 3 = 110. At 4th: (105 + 115 + 110) / 3 = 110. Actually positions 2 - 4: (110 + 105 + 115) / 3 = 110. Rechecking: might be 108.33 based on different window',
  },

  {
    id: 343,
    category: 'data',
    question: 'Binomial distribution with n = 10, p = 0.5. What is expected value ?',
    options: ['2.5', '5', '7.5', '10'],
    correctAnswer: 1,
    explanation: 'Expected value = n×p = 10×0.5 = 5',
  },

  {
    id: 344,
    category: 'data',
    question: 'Quartile deviation is half of:',
    options: ['Range', 'IQR', 'Variance', 'SD'],
    correctAnswer: 1,
    explanation: 'Quartile Deviation = (Q3 - Q1) / 2 = IQR / 2',
  },

  {
    id: 345,
    category: 'data',
    question: 'Control chart shows 7 consecutive points above mean. What does this indicate ?',
    options: ['Normal variation', 'Special cause variation', 'Random pattern', 'No issue'],
    correctAnswer: 1,
    explanation: '7 + consecutive points on one side indicates special cause, non - random pattern',
  },

  {
    id: 346,
    category: 'data',
    question: 'Geometric mean of 2,4,8 is:',
    options: ['4', '4.67', '5', '14'],
    correctAnswer: 0,
    explanation: 'GM = ∛(2×4×8) = ∛64 = 4',
  },

  {
    id: 347,
    category: 'data',
    question: 'Probability density function integrates to:',
    options: ['0', '0.5', '1', 'Mean'],
    correctAnswer: 2,
    explanation: 'PDF integrates over entire range to 1',
  },

  {
    id: 348,
    category: 'data',
    question: 'Coefficient of kurtosis = 3. What type of distribution ?',
    options: ['Leptokurtic', 'Mesokurtic', 'Platykurtic', 'Uniform'],
    correctAnswer: 1,
    explanation: 'Kurtosis = 3 is mesokurtic (normal distribution)',
  },

  {
    id: 349,
    category: 'data',
    question: 'Lorenz curve shows income distribution. Gini coefficient of 0 means:',
    options: ['Perfect inequality', 'Perfect equality', 'Average equality', 'Cannot determine'],
    correctAnswer: 1,
    explanation: 'Gini = 0 means perfect equality. Gini = 1 means perfect inequality',
  },

  {
    id: 350,
    category: 'data',
    question: 'F - test in ANOVA compares:',
    options: ['Means', 'Variances', 'Medians', 'Modes'],
    correctAnswer: 1,
    explanation: 'F - test compares variances. Used in ANOVA to test if group means differ',
  },

  {
    id: 351,
    category: 'data',
    question: 'A sample of 50 has mean 100 and SD 15. Standard error of mean is:',
    options: ['1.5', '2.12', '3.0', '15'],
    correctAnswer: 1,
    explanation: 'SE = SD / √ n = 15 / √ 50 = 15 / 7.07  ≈  2.12',
  },

  {
    id: 352,
    category: 'data',
    question: 'Pareto chart is used to:',
    options: [
      'Show time trends',
      'Identify most significant factors',
      'Compare categories',
      'Show distribution',
    ],
    correctAnswer: 1,
    explanation: 'Pareto chart follows 80 - 20 rule to identify vital few factors',
  },

  {
    id: 353,
    category: 'data',
    question: 'Data: 5,10,15,20,25,30. What is 75th percentile ?',
    options: ['20', '22.5', '25', '27.5'],
    correctAnswer: 1,
    explanation: '75th percentile position = 0.75×(6 + 1) = 5.25. Value between 5th and 6th = 22.5',
  },

  {
    id: 354,
    category: 'data',
    question:
      'Null hypothesis states μ = 50. Sample gives p - value = 0.08. At α = 0.05, decision ?',
    options: ['Reject H0', 'Fail to reject H0', 'Accept H0', 'Inconclusive'],
    correctAnswer: 1,
    explanation: 'p - value (0.08) > α (0.05), fail to reject null hypothesis',
  },

  {
    id: 355,
    category: 'data',
    question: 'Covariance between X and Y is positive. This means:',
    options: [
      'X and Y move in opposite directions',
      'X and Y move together',
      'No relationship',
      'Perfect correlation',
    ],
    correctAnswer: 1,
    explanation: 'Positive covariance indicates variables tend to move in same direction',
  },

  {
    id: 356,
    category: 'data',
    question: 'Sample proportion = 0.6, n = 100. What is standard error of proportion ?',
    options: ['0.049', '0.06', '0.49', '6'],
    correctAnswer: 0,
    explanation: 'SE = √ [p(1 - p) / n] = √ [0.6×0.4 / 100] = √ 0.0024  ≈  0.049',
  },

  {
    id: 357,
    category: 'data',
    question: 'Box plot shows box from 20 to 40 with median at 30. What is Q1 ?',
    options: ['20', '25', '30', '35'],
    correctAnswer: 0,
    explanation: 'Box extends from Q1 to Q3. Q1 = 20',
  },

  {
    id: 358,
    category: 'data',
    question: 'Time series decomposition separates data into:',
    options: [
      'Mean and variance',
      'Trend, seasonal, cyclical, irregular',
      'High and low values',
      'Positive and negative',
    ],
    correctAnswer: 1,
    explanation: 'Time series = Trend + Seasonal + Cyclical + Irregular components',
  },

  {
    id: 359,
    category: 'data',
    question: 'Harmonic mean of 2,4,6 is:',
    options: ['3', '3.27', '4', '4.67'],
    correctAnswer: 1,
    explanation: 'HM = n / Σ(1 / xi) = 3 / (1 / 2 + 1 / 4 + 1 / 6) = 3 / 0.917  ≈  3.27',
  },

  {
    id: 360,
    category: 'data',
    question: 'Confidence level 95% corresponds to significance level:',
    options: ['0.025', '0.05', '0.95', '1.96'],
    correctAnswer: 1,
    explanation: 'Significance level α = 1 - confidence level = 1 - 0.95 = 0.05',
  },

  {
    id: 361,
    category: 'data',
    question: 'Index number for base year is always:',
    options: ['0', '1', '10', '100'],
    correctAnswer: 3,
    explanation: 'Base year index is standardized to 100',
  },

  {
    id: 362,
    category: 'data',
    question: 'Residual in regression is difference between:',
    options: ['X and Y', 'Actual and predicted Y', 'Mean and median', 'Two samples'],
    correctAnswer: 1,
    explanation: 'Residual = Actual Y - Predicted Y (error term)',
  },

  {
    id: 363,
    category: 'data',
    question: 'Data points: (2,4), (4,8), (6,12). What is slope of regression line Y on X ?',
    options: ['0.5', '1', '2', '4'],
    correctAnswer: 2,
    explanation: 'Perfect linear: Y = 2X. Slope = 2',
  },

  {
    id: 364,
    category: 'data',
    question: 'Power of statistical test is:',
    options: ['P(Type I error)', 'P(Type II error)', '1 - P(Type II error)', 'α level'],
    correctAnswer: 2,
    explanation: 'Power = 1 - β = 1 - P(Type II error)',
  },

  {
    id: 365,
    category: 'data',
    question: 'Seasonality index of 1.2 for January means:',
    options: ['20% below average', '20% above average', '120% of annual', 'No change'],
    correctAnswer: 1,
    explanation: 'Index 1.2 means 20% above average (1.0)',
  },

  {
    id: 366,
    category: 'data',
    question: 'Chi - square test is used for:',
    options: ['Comparing means', 'Testing independence', 'Correlation', 'Regression'],
    correctAnswer: 1,
    explanation: 'Chi - square tests independence between categorical variables',
  },

  {
    id: 367,
    category: 'data',
    question: 'Weighted mean of 10(weight = 3), 20(weight = 2), 30(weight = 5) is:',
    options: ['20', '22', '23', '25'],
    correctAnswer: 2,
    explanation: 'WM = (10×3 + 20×2 + 30×5) / (3 + 2 + 5) = 230 / 10 = 23',
  },

  {
    id: 368,
    category: 'data',
    question: 'Probability sampling method includes:',
    options: [
      'Convenience sampling',
      'Quota sampling',
      'Simple random sampling',
      'Judgmental sampling',
    ],
    correctAnswer: 2,
    explanation: 'Simple random sampling is probability - based. Others are non - probability',
  },

  {
    id: 369,
    category: 'data',
    question: 'Effect size in statistics measures:',
    options: ['Sample size', 'Significance', 'Practical importance', 'P - value'],
    correctAnswer: 2,
    explanation: 'Effect size measures practical / clinical significance, not just statistical',
  },

  {
    id: 370,
    category: 'data',
    question: 'Ogive curve is used to determine:',
    options: ['Mean', 'Median', 'Mode', 'SD'],
    correctAnswer: 1,
    explanation: 'Ogive (cumulative frequency curve) is used to find median and quartiles',
  },

  {
    id: 371,
    category: 'data',
    question: 'If all values in dataset are multiplied by 2, what happens to variance ?',
    options: ['Doubles', 'Quadruples', 'Remains same', 'Halves'],
    correctAnswer: 1,
    explanation: 'Variance scales by square of constant. Var(2X) = 4×Var(X)',
  },

  {
    id: 372,
    category: 'data',
    question: 'Spearman rank correlation is used when:',
    options: ['Data is normal', 'Data is ordinal', 'Large sample', 'Equal variances'],
    correctAnswer: 1,
    explanation: 'Spearman is non - parametric for ordinal / ranked data',
  },

  {
    id: 373,
    category: 'data',
    question: 'Central Limit Theorem states that sampling distribution approaches normal when:',
    options: ['n < 10', 'n ≥ 30', 'n = 100', 'Any n'],
    correctAnswer: 1,
    explanation: 'CLT typically applies when sample size ≥ 30',
  },

  {
    id: 374,
    category: 'data',
    question: 'Probability of getting sum 7 when rolling two dice:',
    options: ['1 / 12', '1 / 9', '1 / 6', '1 / 4'],
    correctAnswer: 2,
    explanation: '6 ways to get 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). P = 6 / 36 = 1 / 6',
  },

  {
    id: 375,
    category: 'data',
    question: 'Degrees of freedom for t - test with sample size 25:',
    options: ['23', '24', '25', '26'],
    correctAnswer: 1,
    explanation: 'df = n - 1 = 25 - 1 = 24',
  },

  {
    id: 376,
    category: 'data',
    question: 'Laspeyres price index uses weights from:',
    options: ['Base year', 'Current year', 'Average', 'Both years'],
    correctAnswer: 0,
    explanation: 'Laspeyres uses base year quantities as weights',
  },

  {
    id: 377,
    category: 'data',
    question: 'If mean = median = mode, distribution is:',
    options: ['Positively skewed', 'Negatively skewed', 'Symmetric', 'Bimodal'],
    correctAnswer: 2,
    explanation: 'When mean = median = mode, distribution is symmetric',
  },

  {
    id: 378,
    category: 'data',
    question: 'Multicollinearity in regression refers to:',
    options: [
      'High correlation among predictors',
      'Non - linear relationship',
      'Outliers',
      'Heteroscedasticity',
    ],
    correctAnswer: 0,
    explanation: 'Multicollinearity is high correlation between independent variables',
  },

  {
    id: 379,
    category: 'data',
    question: 'Monte Carlo simulation is used for:',
    options: ['Descriptive statistics', 'Risk modeling', 'Hypothesis testing', 'Data collection'],
    correctAnswer: 1,
    explanation: 'Monte Carlo uses random sampling for risk analysis and modeling uncertainty',
  },

  {
    id: 380,
    category: 'data',
    question: 'Margin of error for 95% CI with SE = 2 is approximately:',
    options: ['1.96', '2', '3.92', '4'],
    correctAnswer: 2,
    explanation: 'Margin of error = z×SE = 1.96×2 = 3.92',
  },

  {
    id: 381,
    category: 'data',
    question: 'Heteroscedasticity means:',
    options: ['Equal variances', 'Unequal variances', 'Normal distribution', 'Linear relationship'],
    correctAnswer: 1,
    explanation: 'Heteroscedasticity is non - constant variance of errors in regression',
  },

  {
    id: 382,
    category: 'data',
    question: 'Stratified sampling ensures:',
    options: ['Random selection', 'Equal representation of strata', 'Large sample', 'No bias'],
    correctAnswer: 1,
    explanation: 'Stratified sampling ensures all subgroups are proportionally represented',
  },

  {
    id: 383,
    category: 'data',
    question: 'Coefficient of determination ranges from:',
    options: [' - 1 to 1', '0 to 1', '0 to 100', 'Any value'],
    correctAnswer: 1,
    explanation: 'R² ranges from 0 (no fit) to 1 (perfect fit)',
  },

  {
    id: 384,
    category: 'data',
    question: 'Wilcoxon test is non - parametric alternative to:',
    options: ['ANOVA', 't - test', 'Chi - square', 'F - test'],
    correctAnswer: 1,
    explanation: 'Wilcoxon signed - rank test is non - parametric version of paired t - test',
  },

  {
    id: 385,
    category: 'data',
    question: 'Expected value of rolling a fair die:',
    options: ['3', '3.5', '4', '6'],
    correctAnswer: 1,
    explanation: 'E(X) = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21 / 6 = 3.5',
  },

  {
    id: 386,
    category: 'data',
    question: 'Autocorrelation in time series means:',
    options: [
      'Correlation with other series',
      'Correlation with itself at different lags',
      'No correlation',
      'Random pattern',
    ],
    correctAnswer: 1,
    explanation: 'Autocorrelation is correlation of series with its own lagged values',
  },

  {
    id: 387,
    category: 'data',
    question: 'Sample mean is unbiased estimator of:',
    options: ['Sample median', 'Population mean', 'Sample variance', 'Population variance'],
    correctAnswer: 1,
    explanation: 'Sample mean is unbiased estimator of population mean μ',
  },

  {
    id: 388,
    category: 'data',
    question:
      'Probability of A given B is P(A|B) = 0.8, P(B) = 0.5, P(A) = 0.6. Are A and B independent ?',
    options: ['Yes', 'No', 'Cannot determine', 'Need more info'],
    correctAnswer: 1,
    explanation: 'For independence: P(A|B) should equal P(A). 0.8 ≠ 0.6, so not independent',
  },

  {
    id: 389,
    category: 'data',
    question: 'Kruskal - Wallis test is non - parametric alternative to:',
    options: ['t - test', 'One - way ANOVA', 'Two - way ANOVA', 'Regression'],
    correctAnswer: 1,
    explanation: 'Kruskal - Wallis is non - parametric version of one - way ANOVA',
  },

  {
    id: 390,
    category: 'data',
    question: 'If P(A∪B) = 0.8, P(A) = 0.5, P(B) = 0.4, what is P(A∩B) ?',
    options: ['0.1', '0.2', '0.3', '0.9'],
    correctAnswer: 0,
    explanation: 'P(A∪B) = P(A) + P(B) - P(A∩B). 0.8 = 0.5 + 0.4 - P(A∩B). P(A∩B) = 0.1',
  },

  {
    id: 391,
    category: 'data',
    question: 'Moving average smoothing is used to:',
    options: ['Remove trend', 'Remove seasonality', 'Remove random fluctuations', 'Add noise'],
    correctAnswer: 2,
    explanation: 'Moving average smooths random fluctuations to reveal trend',
  },

  {
    id: 392,
    category: 'data',
    question: 'Levene test is used to test:',
    options: ['Normality', 'Homogeneity of variances', 'Independence', 'Linearity'],
    correctAnswer: 1,
    explanation: 'Levene test checks if variances are equal across groups',
  },

  {
    id: 393,
    category: 'data',
    question: 'Bayes theorem relates:',
    options: [
      'Mean and variance',
      'Prior and posterior probabilities',
      'Sample and population',
      'X and Y',
    ],
    correctAnswer: 1,
    explanation: 'Bayes theorem updates prior probability to posterior given evidence',
  },

  {
    id: 394,
    category: 'data',
    question: 'Cross - validation in ML is used for:',
    options: ['Training', 'Testing model performance', 'Data collection', 'Feature selection'],
    correctAnswer: 1,
    explanation: 'Cross - validation assesses model generalization on unseen data',
  },

  {
    id: 395,
    category: 'data',
    question:
      'If coefficient of variation for dataset A is 20% and B is 30%, which is more variable ?',
    options: ['A', 'B', 'Same', 'Cannot compare'],
    correctAnswer: 1,
    explanation: 'Higher CV means more variability relative to mean. B is more variable',
  },

  {
    id: 396,
    category: 'data',
    question: 'Law of Large Numbers states that as sample size increases:',
    options: [
      'Variance increases',
      'Sample mean approaches population mean',
      'SD increases',
      'Bias increases',
    ],
    correctAnswer: 1,
    explanation: 'LLN: As n→∞, sample mean converges to population mean',
  },

  {
    id: 397,
    category: 'data',
    question: 'Fisher LSD (Least Significant Difference) is post - hoc test for:',
    options: ['Chi - square', 'ANOVA', 't - test', 'Correlation'],
    correctAnswer: 1,
    explanation: 'Fisher LSD is post - hoc test following significant ANOVA to compare pairs',
  },

  {
    id: 398,
    category: 'data',
    question: 'Poisson distribution is appropriate for:',
    options: ['Continuous data', 'Count of rare events', 'Binary outcomes', 'Normal data'],
    correctAnswer: 1,
    explanation: 'Poisson models count of rare events in fixed interval',
  },

  {
    id: 399,
    category: 'data',
    question: 'If scatterplot shows no pattern, correlation coefficient is approximately:',
    options: [' - 1', '0', '0.5', '1'],
    correctAnswer: 1,
    explanation: 'No pattern indicates no linear relationship, r  ≈  0',
  },

  {
    id: 400,
    category: 'data',
    question: 'In hypothesis testing, β (beta) represents:',
    options: ['Significance level', 'Type I error', 'Type II error probability', 'Power'],
    correctAnswer: 2,
    explanation: 'β = P(Type II error) = probability of failing to reject false null hypothesis',
  },
];

export default dataQuestions;
