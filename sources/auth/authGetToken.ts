// Single-user mode: simplified token generation

export async function authGetToken(secret: Uint8Array): Promise<string> {
    // Single-user mode: return fixed token
    return 'single-user-mode-token';
}

export async function authGetTokenWithSecret(secret: string): Promise<string> {
    // Single-user mode: return fixed token regardless of secret
    return 'single-user-mode-token';
}