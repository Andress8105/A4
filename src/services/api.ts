const API_BASE_URL = 'http://localhost:5000/api';

interface ApiResponse<T = any> {
  message: string;
  data?: T;
  token?: string;
  user?: any;
  errors?: string[];
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }
    
    return data;
  }

  // Auth endpoints
  async register(name: string, email: string, password: string): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ name, email, password })
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async login(email: string, password: string): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ email, password })
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async getCurrentUser(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: this.getAuthHeaders()
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async logout(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: this.getAuthHeaders()
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ currentPassword, newPassword })
    });

    return this.handleResponse<ApiResponse>(response);
  }

  // User endpoints
  async getUserProfile(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: this.getAuthHeaders()
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async updateProfile(name: string): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ name })
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async updateProgress(progress: {
    htmlLessons?: number;
    cssLessons?: number;
    completedProject?: { name: string };
    certificate?: { name: string };
  }): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/users/progress`, {
      method: 'PUT',
      headers: this.getAuthHeaders(),
      body: JSON.stringify(progress)
    });

    return this.handleResponse<ApiResponse>(response);
  }

  async getUserStats(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/users/stats`, {
      headers: this.getAuthHeaders()
    });

    return this.handleResponse<ApiResponse>(response);
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    const response = await fetch(`${API_BASE_URL}/health`);
    return this.handleResponse<ApiResponse>(response);
  }
}

export const apiService = new ApiService();
export default apiService;