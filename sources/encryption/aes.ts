// Single-user mode: simplified AES encryption stub
export function encryptAES(data: string, key: Uint8Array): Uint8Array {
  // Single-user mode: return data as-is in bytes
  return new TextEncoder().encode(data);
}

export function decryptAES(encryptedData: Uint8Array, key: Uint8Array): string {
  // Single-user mode: return data as-is converted to string
  return new TextDecoder().decode(encryptedData);
}

export function generateAESKey(): Uint8Array {
  // Single-user mode: return dummy key
  return new Uint8Array(32);
}