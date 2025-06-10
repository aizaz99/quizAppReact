import type { Question } from "../types/quiz";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Question 1 of 5
    </h2>
  </div>;
}