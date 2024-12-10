import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormatter('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function calculateReward({
  baseAmount,
  difficulty,
  streakCount,
}: {
  baseAmount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  streakCount: number;
}): number {
  const difficultyMultiplier = {
    easy: 1,
    medium: 1.5,
    hard: 2,
  }[difficulty];

  const streakBonus = Math.min(streakCount * 0.1, 0.5);
  
  return Math.floor(baseAmount * difficultyMultiplier * (1 + streakBonus));
}