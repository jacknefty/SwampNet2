import { z } from 'zod';

// User Types
export const userSchema = z.object({
  id: z.string(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  role: z.enum(['user', 'admin']),
  createdAt: z.date(),
  stats: z.object({
    gamesPlayed: z.number().default(0),
    wins: z.number().default(0),
    losses: z.number().default(0),
    rewards: z.number().default(0),
    bananas: z.number().default(0),
    votesCount: z.number().default(0),
  }),
});

// Game Types
export const gameStatsSchema = z.object({
  userId: z.string(),
  totalPlaytime: z.number().default(0),
  skillRating: z.number().default(1000),
  lastPlayed: z.date(),
});

// Reward Types
export const rewardSchema = z.object({
  id: z.string(),
  userId: z.string(),
  amount: z.number(),
  type: z.enum(['tokens', 'bananas', 'points']),
  reason: z.string(),
  timestamp: z.date(),
});

// Export Types
export type User = z.infer<typeof userSchema>;
export type GameStats = z.infer<typeof gameStatsSchema>;
export type Reward = z.infer<typeof rewardSchema>;

// Auth Types
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// Game State Types
export type GameType = 'number' | 'card' | 'memory';
export type GameDifficulty = 'easy' | 'medium' | 'hard';

export interface GameState {
  type: GameType;
  difficulty: GameDifficulty;
  isActive: boolean;
  score: number;
  startedAt: Date | null;
  endedAt: Date | null;
}