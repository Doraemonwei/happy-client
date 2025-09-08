// Single-user mode: simplified token storage stub
export interface AuthCredentials {
  token: string;
  secret: string;
}

export function getAuthCredentials(): AuthCredentials | null {
  return {
    token: 'single-user-mode',
    secret: 'single-user-mode'
  };
}

export function setAuthCredentials(credentials: AuthCredentials): void {
  // Single-user mode: no-op
}

export function clearAuthCredentials(): void {
  // Single-user mode: no-op
}