# Advanced Quiz System Architecture

This document outlines the high level structure of the Phase II quiz engine.

## Components

- **Question Data** – defined in `app/data/advanced-quiz.json`. Each entry
  specifies a type (`multiple-choice`, `true-false`, or `text`), available
  options, the correct answer and the points awarded.
- **React Components** – the quiz UI is built from `QuizQuestion` and
  `AdvancedQuiz` in `app/components/quiz/`. `AdvancedQuiz` manages navigation
  through questions, scoring and certificate display.
- **State Management** – results are stored in the HyperCard context via the
  `SAVE_QUIZ_RESULT` action. Progress is still persisted to the server through
  `/api/progress`.
- **Server Persistence** – quiz results are saved with the new `/api/quiz`
  endpoint. Data is stored in the `QuizResult` table defined in the Prisma
  schema.
 - **Certificate** – once the final score is calculated, a certificate is displayed if
  the user scores at least 20 points, with an **Export Certificate** button that prints
  the certificate as a PDF.

## Extending

Other agents can add more question types or hook additional features (like PDF
export) by building on the components and API described here.
