export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isInitialized: boolean;
  updateProgress: (progress: {
    htmlLessons?: number;
    cssLessons?: number;
    completedProject?: { name: string };
    certificate?: { name: string };
  }) => Promise<void>;
}