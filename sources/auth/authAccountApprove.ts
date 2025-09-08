// Single-user mode: simplified auth account approve stub
export function authAccountApprove(): Promise<{ success: boolean }> {
  // Single-user mode: always succeed
  return Promise.resolve({ success: true });
}