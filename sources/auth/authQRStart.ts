// Single-user mode: simplified QR auth start

export interface QRAuthStartRequest {
    deviceId?: string;
}

export interface QRAuthStartResponse {
    success: boolean;
    qrData?: string;
    sessionId?: string;
    message?: string;
}

export interface QRAuthKeyPair {
    publicKey: Uint8Array;
    secretKey: Uint8Array;
}

export async function authQRStart(keyPair: QRAuthKeyPair): Promise<boolean> {
    // Single-user mode: always successful
    return true;
}

export function generateAuthKeyPair(): QRAuthKeyPair {
    // Single-user mode: return mock key pair
    return {
        publicKey: new Uint8Array(32),
        secretKey: new Uint8Array(32)
    };
}