// This is ONLY your type definitions
export type GameState = "start" | "playing" | "end";

export interface Question {
  question: string;
  options: string[];
  correct: number;
}