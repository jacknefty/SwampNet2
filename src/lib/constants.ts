export const APP_NAME = 'SwampNet';

export const GAME_SETTINGS = {
  NUMBER_GAME: {
    MAX_ATTEMPTS: 5,
    DIFFICULTY_MULTIPLIER: {
      easy: 1,
      medium: 2,
      hard: 3,
    },
  },
  REWARD_RATES: {
    BASE_REWARD: 10,
    WIN_MULTIPLIER: 2,
    STREAK_BONUS: 1.5,
  },
} as const;

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid username or password',
  USER_NOT_FOUND: 'User not found',
  EMAIL_IN_USE: 'Email already in use',
  WEAK_PASSWORD: 'Password must be at least 6 characters',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  GAME: '/game',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;