// Single-user mode: simplified auth token stub
export function getAuthToken(): string {
  return 'single-user-mode-token';
}

export function refreshAuthToken(): Promise<string> {
  return Promise.resolve('single-user-mode-token');
}