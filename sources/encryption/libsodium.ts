// Single-user mode: simplified libsodium stub
export function generateKeyPair() {
  return {
    publicKey: new Uint8Array(32),
    privateKey: new Uint8Array(64)
  };
}

export function encryptMessage(message: string, publicKey: Uint8Array): Uint8Array {
  // Single-user mode: return message as-is in bytes
  return new TextEncoder().encode(message);
}

export function decryptMessage(encryptedData: Uint8Array, privateKey: Uint8Array): string {
  // Single-user mode: return data as-is converted to string
  return new TextDecoder().decode(encryptedData);
}