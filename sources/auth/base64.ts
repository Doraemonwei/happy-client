// Single-user mode: simplified base64 utilities
export function encodeBase64(data: Uint8Array): string {
  // Basic implementation for compatibility
  return Buffer.from(data).toString('base64');
}

export function decodeBase64(data: string): Uint8Array {
  // Basic implementation for compatibility
  return new Uint8Array(Buffer.from(data, 'base64'));
}