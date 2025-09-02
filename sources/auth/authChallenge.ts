// Single-user mode: simplified auth challenge

export interface AuthChallengeRequest {
    publicKey: string;
}

export interface AuthChallengeResponse {
    challenge: string;
    signature: string;
    publicKey: string;
}

export function createAuthChallenge(secretKey: Uint8Array): AuthChallengeResponse {
    // Single-user mode: return mock challenge response
    return {
        challenge: 'single-user-mode-challenge',
        signature: 'single-user-mode-signature',
        publicKey: 'single-user-mode-public-key'
    };
}

export function verifyAuthChallenge(response: AuthChallengeResponse): boolean {
    // Single-user mode: always valid
    return true;
}