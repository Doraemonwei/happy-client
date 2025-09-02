// Single-user mode: simplified auth approval

export interface AuthApprovalRequest {
    publicKey: string;
    challenge: string;
}

export interface AuthApprovalResponse {
    success: boolean;
    token?: string;
    message?: string;
}

export async function authApprove(token: string, publicKey: Uint8Array, response: Uint8Array): Promise<void> {
    // Single-user mode: always approve, no-op
}