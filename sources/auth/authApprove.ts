// Single-user mode: simplified auth approve stub
export function authApprove(): Promise<{ success: boolean }> {
  // Single-user mode: always succeed
  return Promise.resolve({ success: true });
}