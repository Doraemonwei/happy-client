// Single-user mode: simplified secret key backup stub
export function backupSecretKey(): Promise<void> {
  // Single-user mode: no-op
  return Promise.resolve();
}

export function restoreSecretKey(): Promise<void> {
  // Single-user mode: no-op
  return Promise.resolve();
}