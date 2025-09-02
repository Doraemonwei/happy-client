// Single-user mode: simplified QR auth wait

export interface QRAuthKeyPair {
    publicKey: Uint8Array;
    secretKey: Uint8Array;
}

export interface AuthCredentials {
    token: string;
    secret: Uint8Array;
}

export async function authQRWait(
    keyPair: QRAuthKeyPair, 
    onProgressUpdate: (dots: number) => void,
    isCancelled: () => boolean
): Promise<AuthCredentials | null> {
    // Single-user mode: return mock credentials
    return {
        token: 'single-user-mode-token',
        secret: new Uint8Array(32)
    };
}