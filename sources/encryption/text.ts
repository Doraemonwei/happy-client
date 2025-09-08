// Single-user mode: simplified text encryption stub
export function parseToken(token: string): { userId: string } | null {
  // Single-user mode: always return default user
  return { userId: 'default-user' };
}

export function encryptText(text: string): string {
  // Single-user mode: return text as-is
  return text;
}

export function decryptText(encryptedText: string): string {
  // Single-user mode: return text as-is
  return encryptedText;
}