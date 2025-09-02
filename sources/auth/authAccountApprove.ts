// Single-user mode: simplified account auth approval

export interface AccountAuthApprovalRequest {
    publicKey: string;
    accountId: string;
}

export interface AccountAuthApprovalResponse {
    success: boolean;
    token?: string;
    message?: string;
}

export async function authAccountApprove(token: string, publicKey: Uint8Array, response: Uint8Array): Promise<void> {
    // Single-user mode: always approve, no-op
}